const BLOCKS=[
{key:'dass',title:'Sofrimento emocional atual',tag:'Bloco 1 · DASS-21',help:'Considere quanto cada afirmação se aplicou a você nos últimos sete dias.',min:0,max:3,labels:['Não se aplicou','Aplicou-se muito'],count:21},
{key:'emotion',title:'Reconhecimento e bloqueio emocional',tag:'Bloco 2 · perguntas autorais',help:'Pense em como você costuma perceber, explicar e proteger suas emoções.',min:0,max:4,labels:['Nunca','Quase sempre'],count:16},
{key:'communication',title:'Quando a ansiedade aparece',tag:'Bloco 3 · perguntas autorais',help:'Pense no comportamento que costuma surgir quando há distância, insegurança ou conflito.',min:0,max:4,labels:['Nunca','Quase sempre'],count:16},
{key:'relationship',title:'Áreas concretas da relação',tag:'Bloco 4 · perguntas autorais',help:'Avalie como cada área está atualmente. Aqui, pontuação maior significa área mais preservada.',min:1,max:5,labels:['Muito deteriorada','Muito preservada'],count:20},
{key:'history',title:'História, perdas e ativadores',tag:'Bloco 5 · perguntas autorais',help:'Indique quanto cada experiência parece influenciar seu modo atual de se relacionar.',min:0,max:4,labels:['Nada','Influência muito forte'],count:12}
];
const STORAGE='mapa_relacional_v1';
let state={name:'',partner:'',safety:[],answers:{},block:0,index:0,started:null,open:{}};
const $=id=>document.getElementById(id);
function show(id){document.querySelectorAll('section').forEach(s=>s.classList.remove('on'));$(id).classList.add('on');scrollTo(0,0)}
function save(){localStorage.setItem(STORAGE,JSON.stringify(state))}
function load(){try{return JSON.parse(localStorage.getItem(STORAGE)||'null')}catch{return null}}
function clearAll(){localStorage.removeItem(STORAGE);location.reload()}
function init(){
 const saved=load(); if(saved&&saved.answers&&Object.keys(saved.answers).length)$('resumeBox').classList.add('show');
 ['o1','o2','o3','o4','o5'].forEach(id=>$(id).addEventListener('input',()=>{state.open[id]=$(id).value;save()}));
}
function startNew(){
 const n=$('name').value.trim(),p=$('partner').value.trim();
 $('introErr').textContent='';
 if(!n)return $('introErr').textContent='Informe seu nome, iniciais ou código.';
 if(!p)return $('introErr').textContent='Informe o nome ou código do parceiro.';
 if(!$('consent').checked)return $('introErr').textContent='Confirme o consentimento para continuar.';
 state={name:n,partner:p,safety:[...document.querySelectorAll('.safety:checked')].map(x=>x.value),answers:{},block:0,index:0,started:new Date().toISOString(),open:{}};
 save();show('quiz');render();
}
function resume(){
 const s=load(); if(!s)return; state=s;
 ['o1','o2','o3','o4','o5'].forEach(id=>$(id).value=state.open?.[id]||'');
 show('quiz');render();
}
function current(){const b=BLOCKS[state.block];return {b,item:DATA[b.key][state.index]}}
function answeredCount(){return Object.keys(state.answers).length}
function render(){
 const {b,item}=current();
 $('blockTag').textContent=b.tag;$('blockTitle').textContent=b.title;$('blockHelp').textContent=b.help;$('qtext').textContent=item.text;
 $('count').textContent=`${answeredCount()} / 85`;$('fill').style.width=`${answeredCount()/85*100}%`;
 $('labels').innerHTML=`<span>${b.labels[0]}</span><span>${b.labels[1]}</span>`;
 $('scale').className='scale'+(b.max===3?' four':'');$('scale').innerHTML='';
 for(let v=b.min;v<=b.max;v++){let bt=document.createElement('button');bt.textContent=v;bt.className=state.answers[item.id]===v?'sel':'';bt.onclick=()=>{state.answers[item.id]=v;save();render();setTimeout(next,120)};$('scale').appendChild(bt)}
 $('backBtn').disabled=state.block===0&&state.index===0;$('nextBtn').textContent=(state.block===4&&state.index===11)?'Continuar':'Avançar';$('qErr').textContent='';
 $('blockSteps').innerHTML=BLOCKS.map((_,i)=>`<i class="step ${i<state.block?'done':i===state.block?'active':''}"></i>`).join('');
}
function next(){
 const {b,item}=current();if(state.answers[item.id]===undefined)return $('qErr').textContent='Escolha uma opção.';
 if(state.index<DATA[b.key].length-1)state.index++;else if(state.block<BLOCKS.length-1){state.block++;state.index=0}else{show('open');return}
 save();render();
}
function back(){
 if(state.index>0)state.index--;else if(state.block>0){state.block--;state.index=DATA[BLOCKS[state.block].key].length-1}else return;save();render();
}
function avg(ids){return ids.reduce((s,id)=>s+(state.answers[id]??0),0)/ids.length}
function group(block,domains){
 const arr=DATA[block],out={};for(const d of domains){const ids=arr.filter(x=>x.domain===d).map(x=>x.id);out[d]=+avg(ids).toFixed(2)}return out
}
function dassScores(){
 const sums={depression:0,anxiety:0,stress:0};for(const x of DATA.dass)sums[x.domain]+=state.answers[x.id]??0;
 for(const k in sums)sums[k]*=2;return sums;
}
function dassBand(type,v){
 const cuts={depression:[[9,'dentro da faixa esperada'],[13,'leve'],[20,'moderada'],[27,'severa'],[99,'muito severa']],anxiety:[[7,'dentro da faixa esperada'],[9,'leve'],[14,'moderada'],[19,'severa'],[99,'muito severa']],stress:[[14,'dentro da faixa esperada'],[18,'leve'],[25,'moderada'],[33,'severa'],[99,'muito severa']]};
 return cuts[type].find(x=>v<=x[0])[1];
}
const NAMES={identify:'Identificar emoções',describe:'Descrever emoções',vulnerability:'Medo de vulnerabilidade',shutdown:'Desligamento emocional',pursuit:'Busca de confirmação',protest:'Protesto/confronto',withdraw:'Afastamento',constructive:'Comunicação construtiva',connection:'Conexão e apoio',communication:'Comunicação e reparo',trust:'Confiança e segurança',partnership:'Parceria prática',future:'Intimidade e futuro',past:'Rejeições anteriores',family:'Aprendizados familiares',load:'Sobrecarga atual',loss:'Perdas e luto',unspoken:'Assuntos evitados'};
function bars(id,obj,max,invert=false){
 $(id).innerHTML=Object.entries(obj).map(([k,v])=>{let pct=Math.max(0,Math.min(100,(v/max)*100));return `<div class="bar-row"><span>${NAMES[k]}</span><div class="bar"><i style="width:${pct}%"></i></div><b>${v.toFixed(2)}</b></div>`}).join('');
}
function hypotheses(scores){
 const h=[];const e=scores.emotion,c=scores.communication,r=scores.relationship,hi=scores.history,d=scores.dass;
 if(d.depression>=14)h.push('Baixo ânimo e perda de energia podem estar sendo confundidos com desinteresse pelo relacionamento.');
 if(d.anxiety>=10)h.push('Há sinais atuais de ativação ansiosa que podem amplificar interpretações de rejeição, perigo ou abandono.');
 if(d.stress>=19)h.push('Sobrecarga e tensão parecem capazes de reduzir paciência, disponibilidade e capacidade de reparo.');
 if(e.identify>=2.5)h.push('A dificuldade de identificar emoções pode fazer o conflito aparecer primeiro no corpo, na irritação ou no afastamento.');
 if(e.describe>=2.5)h.push('Há indício de sentimentos percebidos, mas difíceis de transformar em palavras compreensíveis para o parceiro.');
 if(e.vulnerability>=2.5)h.push('O bloqueio pode funcionar como proteção contra julgamento, dependência ou uso da vulnerabilidade contra a pessoa.');
 if(e.shutdown>=2.5)h.push('Emoção intensa parece favorecer desligamento, silêncio ou saída da conversa.');
 if(c.pursuit>=2.5&&c.withdraw>=2.5)h.push('O perfil individual já contém tanto busca de segurança quanto afastamento; a reação pode mudar conforme o conflito.');
 if(c.pursuit>=2.5)h.push('Quando a segurança diminui, a tendência é buscar respostas e resolução rápida.');
 if(c.protest>=2.5)h.push('A dor pode ser comunicada por protesto, crítica ou ameaça, aumentando a defensividade do outro.');
 if(c.withdraw>=2.5)h.push('Pressão emocional tende a produzir silêncio, fuga ou ocupação com outras atividades.');
 if(c.constructive<2)h.push('Faltam estratégias estáveis de pausa, escuta, expressão de necessidade e retomada da conversa.');
 const low=Object.entries(r).filter(([k,v])=>v<=2.5).map(([k])=>NAMES[k]);if(low.length)h.push('Áreas mais fragilizadas: '+low.join(', ')+'.');
 const act=Object.entries(hi).filter(([k,v])=>v>=2.5).map(([k])=>NAMES[k]);if(act.length)h.push('Possíveis ativadores relatados: '+act.join(', ')+'. Isso indica associação percebida, não causa comprovada.');
 if(!h.length)h.push('Nenhum domínio apareceu muito elevado. As respostas abertas e a comparação com o parceiro serão importantes para localizar situações específicas.');
 return h;
}
function finish(){
 state.open={o1:$('o1').value.trim(),o2:$('o2').value.trim(),o3:$('o3').value.trim(),o4:$('o4').value.trim(),o5:$('o5').value.trim()};
 const scores={dass:dassScores(),emotion:group('emotion',['identify','describe','vulnerability','shutdown']),communication:group('communication',['pursuit','protest','withdraw','constructive']),relationship:group('relationship',['connection','communication','trust','partnership','future']),history:group('history',['past','family','load','loss','unspoken'])};
 $('dassMetrics').innerHTML=[['depression','Depressão'],['anxiety','Ansiedade'],['stress','Estresse']].map(([k,n])=>`<div class="metric"><strong>${scores.dass[k]}</strong><span>${n} · ${dassBand(k,scores.dass[k])}</span></div>`).join('');
 bars('emotionBars',scores.emotion,4);bars('commBars',scores.communication,4);bars('relBars',scores.relationship,5);bars('histBars',scores.history,4);
 $('hypotheses').innerHTML=hypotheses(scores).map(x=>`<article>${x}</article>`).join('');
 if(state.safety.length){
   const self=state.safety.includes('autoagressao');
   $('safetyAlert').innerHTML=`<div class="notice danger"><strong>Priorize segurança.</strong> As respostas indicam situação que não deve ser tratada apenas como problema de comunicação do casal. Procure apoio presencial e um profissional. ${self?'Para apoio emocional no Brasil, ligue 188 (CVV).':''}</div>`;
 } else $('safetyAlert').innerHTML='';
 const payload={instrumento:'Mapa multidimensional da ansiedade e do afastamento v1',identificacao:state.name,parceiro:state.partner,data:new Date().toISOString(),inicio:state.started,seguranca:state.safety,respostas:state.answers,abertas:state.open,pontuacoes:scores,nota:'DASS-21 oficial; demais blocos autorais e não diagnósticos'};
 const raw=JSON.stringify(payload);$('payload').value=btoa(unescape(encodeURIComponent(raw))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
 save();show('done');
}
async function copy(){try{await navigator.clipboard.writeText($('payload').value);$('shareMsg').textContent='Código copiado.'}catch{$('payload').select();document.execCommand('copy');$('shareMsg').textContent='Código copiado.'}}
async function share(){const text=`Mapa relacional — ${state.name}\nCódigo completo:\n${$('payload').value}`;if(navigator.share){try{await navigator.share({title:'Mapa relacional',text});return}catch{}}await navigator.clipboard.writeText(text);$('shareMsg').textContent='Conteúdo copiado para compartilhar.'}
function sources(from){state.sourceFrom=from;show('sources')}
$('startBtn').onclick=startNew;$('resumeBtn').onclick=resume;$('discardBtn').onclick=clearAll;$('backBtn').onclick=back;$('nextBtn').onclick=next;
$('openBack').onclick=()=>{state.block=4;state.index=11;show('quiz');render()};$('finishBtn').onclick=finish;$('copyBtn').onclick=copy;$('shareBtn').onclick=share;$('resetBtn').onclick=clearAll;
$('sourcesBtn').onclick=()=>sources('intro');$('sourcesDone').onclick=()=>sources('done');$('sourcesBack').onclick=()=>show(state.sourceFrom||'intro');
init();