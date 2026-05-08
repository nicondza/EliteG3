import{jsxDEV as Q,Fragment as kJ}from"react/jsx-dev-runtime";const d0={apiKey:"AIzaSyAcrVq7ryWv5EJbRhZ1TmhFia-LAV10cN4",authDomain:"eliteg3-1650f.firebaseapp.com",databaseURL:"https://eliteg3-1650f-default-rtdb.firebaseio.com/",projectId:"eliteg3-1650f",storageBucket:"eliteg3-1650f.firebasestorage.app",messagingSenderId:"351711372153",appId:"1:351711372153:web:60ce4742396e37974f85a8",measurementId:"G-HGYPLEY6DJ"};if(!firebase.apps.length)firebase.initializeApp(d0);const M=firebase.database(),{useState:D,useEffect:n,useMemo:m,useRef:CJ}=React,XJ=["C","P","B","N","S","E","X","R"],n0=["R"],GQ="anonimo/galeria",KJ="__anonimo_gallery__",p0=["PERSONAJE","ETIQUETA","GENERAL"],EZ={PERSONAJE:"Personaje",ETIQUETA:"Etiqueta",GENERAL:"General"},iJ=[{id:"perfil",label:"Perfil",labels:[]},{id:"colaPiernas",label:"Cola/Piernas",labels:["C"]},{id:"pechos",label:"Pechos",labels:["P"]},{id:"cuerpoCintura",label:"Cintura/Cuerpo",labels:["N","B"]},{id:"sensualidad",label:"Sensualidad",labels:["E","S"]}],i0={perfil:"perfil",pecho:"pechos",pechos:"pechos",cola:"colaPiernas",piernas:"colaPiernas",cuerpo:"cuerpoCintura",cintura:"cuerpoCintura",sensualidad:"sensualidad"},tX=()=>iJ.reduce((_,O)=>{_[O.id]="";return _},{}),WJ=(_={})=>{const O=tX(),R=_&&typeof _==="object"?_:{};return Object.keys(O).reduce((T,F)=>{T[F]=typeof R[F]==="string"?R[F].trim():"";return T},{...O})},_X=(_="")=>iJ.find((O)=>O.id===_),l0=(_="")=>i0[(_||"").trim().toLowerCase()]||"",WX={C:{bg:"linear-gradient(135deg, rgba(34,211,238,0.92), rgba(14,116,144,0.95))",border:"rgba(103,232,249,0.95)",glow:"rgba(34,211,238,0.8)",text:"#ecfeff"},P:{bg:"linear-gradient(135deg, rgba(244,114,182,0.92), rgba(157,23,77,0.95))",border:"rgba(251,207,232,0.95)",glow:"rgba(244,114,182,0.78)",text:"#fff1f2"},B:{bg:"linear-gradient(135deg, rgba(251,191,36,0.94), rgba(180,83,9,0.95))",border:"rgba(253,224,71,0.98)",glow:"rgba(251,191,36,0.82)",text:"#fffbea"},N:{bg:"linear-gradient(135deg, rgba(163,230,53,0.92), rgba(63,98,18,0.95))",border:"rgba(217,249,157,0.95)",glow:"rgba(163,230,53,0.78)",text:"#f7fee7"},S:{bg:"linear-gradient(135deg, rgba(192,132,252,0.92), rgba(107,33,168,0.95))",border:"rgba(233,213,255,0.95)",glow:"rgba(192,132,252,0.8)",text:"#faf5ff"},E:{bg:"linear-gradient(135deg, rgba(248,113,113,0.92), rgba(153,27,27,0.95))",border:"rgba(254,202,202,0.95)",glow:"rgba(248,113,113,0.8)",text:"#fef2f2"},X:{bg:"linear-gradient(135deg, rgba(239,68,68,0.98), rgba(127,29,29,0.98))",border:"rgba(254,226,226,1)",glow:"rgba(239,68,68,0.95)",text:"#fff7f7"},R:{bg:"linear-gradient(135deg, rgba(148,163,184,0.95), rgba(71,85,105,0.98))",border:"rgba(226,232,240,0.95)",glow:"rgba(148,163,184,0.82)",text:"#f8fafc"},DEFAULT:{bg:"linear-gradient(135deg, rgba(51,65,85,0.92), rgba(15,23,42,0.95))",border:"rgba(148,163,184,0.85)",glow:"rgba(148,163,184,0.45)",text:"#f8fafc"}},HQ=(_,O)=>{if(!O)return 0;return(_+O)%O},FZ=(_,O,R=!1)=>{const T=Array.isArray(O)?O.length:0;if(!T)return null;if(T===1)return 0;if(R){const F=O.map((v,c)=>({item:v,idx:c})).filter(({item:v,idx:c})=>c!==_&&v&&v.url).map(({idx:v})=>v);if(!F.length)return HQ((_??0)+1,T);return F[Math.floor(Math.random()*F.length)]}return HQ((_??0)+1,T)},lJ=(_)=>WX[_]||WX.DEFAULT,OX=(_,O=!1)=>{const R=_==="INICIAL"?WX.DEFAULT:_==="100"?WX.B:lJ(_);return{"--btn-neon-color":R.glow,borderColor:R.border,color:R.text,boxShadow:O?`inset 0 1px 0 rgba(186,230,253,0.35), 0 0 0 1px ${R.border}, 0 0 20px ${R.glow}`:`inset 0 1px 0 rgba(186,230,253,0.2), 0 0 0 1px color-mix(in srgb, ${R.border} 65%, rgba(15,23,42,0.65) 35%), 0 0 12px color-mix(in srgb, ${R.glow} 60%, transparent)`,textShadow:`0 0 8px color-mix(in srgb, ${R.glow} 70%, transparent)`,filter:O?"brightness(1.14)":"brightness(1)"}},UZ=/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i,t0=/\.(mp3|wav|ogg|m4a|aac|flac)(\?.*)?$/i,o0=/\.gif(\?.*)?$/i,a0=/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i,r0=/vimeo\.com\/(?:video\/)?(\d+)/i,jQ=(_)=>{const O=(_||"").trim();if(!O)return null;const R=O.match(a0);if(R)return{provider:"youtube",src:`https://www.youtube.com/embed/${R[1]}`,title:"Video de YouTube"};const T=O.match(r0);if(T)return{provider:"vimeo",src:`https://player.vimeo.com/video/${T[1]}`,title:"Video de Vimeo"};return null},e0=["eporner.com"],VZ=(_="")=>{const O=String(_||"").trim();if(!O||O.startsWith("data:")||O.startsWith("blob:"))return!1;try{const T=new URL(O).hostname.toLowerCase();return e0.some((F)=>T===F||T.endsWith(`.${F}`))}catch{return!1}},ZJ=(_="",O="")=>{const R=String(_||"").trim();if(!R||VZ(R))return O;return R},tJ=(_="",O="")=>{if(O==="video"||O==="image")return O;const R=(_||"").trim();if(UZ.test(R)||jQ(R))return"video";return"image"},oX=(_="")=>{return typeof _==="string"?_.trim():""},e=(_,O="")=>{if(typeof _==="string")return{url:ZJ(_.trim(),""),label:"",type:tJ(_,O),autor:""};if(_&&typeof _==="object"){const R=ZJ((_.url||"").trim(),"");return{url:R,label:XJ.includes(_.label)?_.label:"",type:tJ(R,_.type||O),autor:oX(_.autor)}}return{url:"",label:"",type:tJ("",O),autor:""}},J1=(_)=>e(_).url,DZ=(_)=>e(_).label,oJ=(_)=>e(_).type,aX=(_,O,R="image")=>Array.isArray(_?.[O])?_[O].map((T)=>e(T,R)).filter((T)=>T.url):[],Q1=(_={})=>({firebaseId:KJ,nombre:"Anónimo",nacionalidad:"",ciudad:"",profesion:"Galería",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:aX(_,"fotos","image"),gifs:aX(_,"gifs","image"),videos:aX(_,"videos","video")},batallaFotosPreferidas:tX(),puntuaciones:SQ(),isAnonymousGallery:!0}),X1=(_={})=>{if(_?.isAnonymousGallery||_?.firebaseId===KJ)return"anonimo";return _?.firebaseId||""},Y1=(_={})=>{const O=ZJ(String(_?.fotos?.[0]||"").trim(),""),R=WJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{});if(!O)return!1;return iJ.filter((T)=>T.id!=="perfil").every((T)=>Boolean(String(R?.[T.id]||"").trim()))},Z1=(_={})=>{const O=[],R=ZJ(String(_?.fotos?.[0]||"").trim(),""),T=WJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{});if(!R)O.push("Perfil");iJ.filter((F)=>F.id!=="perfil").forEach((F)=>{if(!String(T?.[F.id]||"").trim())O.push(F.label)});return O},$1=(_=null)=>{if(!_)return;const O=window.open("","_blank");if(!O)return;const R=_?.firebaseId||_?.id||"",T=Array.isArray(_?.galeria?.fotos)?_.galeria.fotos.map((V)=>e(V,"image")).filter((V)=>V.url).map((V,I)=>({...V,sourceTag:"fotos",sourceIndex:I})):[],F=T.filter((V)=>V.type==="image"&&V.sourceTag==="fotos"),v=WJ(_?.batallaFotosPreferidas||_?.galeria?.battlePhotoPreferences||{}),c=ZJ(String(_?.fotos?.[0]||_?.foto||"").trim(),""),jJ=T.filter((V)=>V.type==="image"&&V.url).reduce((V,I)=>{V[I.url]=I;return V},{}),JJ=T.length?T.map((V,I)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-cyan-200/20 text-left multimedia-thumb-btn"
                        data-url="${V.url}"
                        data-label="${V.label||""}"
                        data-index="${V.sourceIndex}"
                        data-tag="${V.sourceTag}"
                        data-media-type="${V.type||"image"}"
                        draggable="true"
                        title="Editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap">
                            <img src="${V.url}" alt="Multimedia ${I+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${V.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin contenido en galería.</p>',k=F.length?F.map((V,I)=>`
                    <button
                        type="button"
                        class="surface-panel rounded-xl overflow-hidden border border-rose-300/35 text-left multimedia-thumb-btn multimedia-thumb-btn--broken"
                        data-url="${V.url}"
                        data-label="${V.label||""}"
                        data-index="${V.sourceIndex}"
                        data-tag="${V.sourceTag}"
                        data-media-type="${V.type||"image"}"
                        draggable="true"
                        data-broken-card="true"
                        style="display:none;"
                        title="Imagen rota: tocar para editar URL o etiqueta"
                    >
                        <div class="multimedia-thumb-wrap multimedia-thumb-wrap--broken">
                            <img src="${V.url}" alt="Imagen rota ${I+1}" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
                            <span class="multimedia-thumb-label">${V.label||"SIN ETIQUETA"}</span>
                        </div>
                    </button>
                `).join(""):'<p class="text-slate-300">Sin imágenes en galería.</p>',A=iJ.map((V)=>{const I=V.id==="perfil",N=I?c:v[V.id]||"",s=N?I?{url:N}:jJ[N]||{url:N,label:"",sourceIndex:-1}:null,S=Boolean(N);return`
                    <div class="multimedia-slot-card ${S?"is-assigned":"is-missing"}" data-slot-id="${V.id}">
                        <div class="multimedia-slot-top">
                            <span class="multimedia-slot-title">${V.label}</span>
                            <span class="multimedia-slot-state">${S?"VERDE":"ROJO"}</span>
                        </div>
                        <div class="multimedia-slot-preview">
                            ${S?`<img src="${s.url}" alt="${V.label}" loading="lazy" />`:'<span class="multimedia-slot-empty">Sin foto designada</span>'}
                        </div>
                        <div class="multimedia-slot-actions">
                            ${!I?`<button type="button" class="multimedia-slot-assign-btn" data-slot-assign="${V.id}">DESIGNAR FOTO</button>`:""}
                            <button type="button" class="multimedia-slot-add-btn" data-slot-add="${V.id}">Agregar URL/Archivo</button>
                        </div>
                    </div>
                `}).join("");O.document.write(`
                <!DOCTYPE html>
                <html lang="es">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Multimedia - ${_?.nombre||"Personaje"}</title>
                        <script src="https://cdn.tailwindcss.com"></script>
                        <link rel="stylesheet" href="styles.css" />
                        <style>
                            .multimedia-gallery-scroll { overflow: visible; padding-right: 0; }
                            .multimedia-gallery-scroll::-webkit-scrollbar { width: 8px; }
                            .multimedia-gallery-scroll::-webkit-scrollbar-thumb { background: rgba(34,211,238,0.45); border-radius: 99px; }
                            .multimedia-thumb-btn { transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
                            .multimedia-thumb-btn:hover { transform: translateY(-2px); border-color: rgba(34,211,238,0.55); box-shadow: 0 0 22px rgba(34,211,238,0.22); }
                            .multimedia-thumb-wrap { position: relative; background: rgba(2,6,23,0.78); height: 170px; display: flex; align-items: center; justify-content: center; }
                            .multimedia-thumb-wrap--broken::after {
                                content: 'ROTA';
                                position: absolute;
                                top: 8px;
                                left: 8px;
                                font-size: 10px;
                                font-weight: 900;
                                letter-spacing: .12em;
                                text-transform: uppercase;
                                color: #fecaca;
                                background: rgba(127,29,29,.82);
                                border: 1px solid rgba(252,165,165,.8);
                                border-radius: 999px;
                                padding: 3px 8px;
                            }
                            .multimedia-thumb-label {
                                position: absolute; right: 8px; bottom: 8px; z-index: 4; max-width: calc(100% - 16px);
                                border-radius: 999px; padding: 4px 10px; font-size: 10px; font-weight: 800; letter-spacing: .12em;
                                text-transform: uppercase; color: #ecfeff; border: 1px solid rgba(34,211,238,.72);
                                background: rgba(2,6,23,.82); backdrop-filter: blur(6px); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
                            }
                            .multimedia-slots-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 10px; }
                            .multimedia-slot-card { border-radius: 12px; padding: 10px; border: 1px solid rgba(148,163,184,0.45); background: rgba(2,6,23,0.72); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08); transition: border-color .16s ease, box-shadow .16s ease, transform .16s ease; }
                            .multimedia-slot-card.drop-hover { border-color: rgba(56,189,248,0.95); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(56,189,248,0.35), 0 0 22px rgba(34,211,238,0.35); transform: translateY(-1px); }
                            .multimedia-slot-card.drop-active { border-color: rgba(14,165,233,1); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(14,165,233,0.4), 0 0 30px rgba(14,165,233,0.44); transform: translateY(-2px); }
                            .multimedia-slot-card.is-assigned { border-color: rgba(34,197,94,0.95); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(34,197,94,0.3); }
                            .multimedia-slot-card.is-missing { border-color: rgba(239,68,68,0.95); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(239,68,68,0.24); }
                            .multimedia-slot-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
                            .multimedia-slot-title { font-size: 10px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; color: #f8fafc; }
                            .multimedia-slot-state { font-size: 9px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
                            .multimedia-slot-card.is-assigned .multimedia-slot-state { color: #86efac; }
                            .multimedia-slot-card.is-missing .multimedia-slot-state { color: #fca5a5; }
                            .multimedia-slot-preview { border-radius: 8px; overflow: hidden; aspect-ratio: 4/3; border: 1px dashed rgba(148,163,184,0.45); background: rgba(15,23,42,0.88); display: flex; align-items: center; justify-content: center; }
                            .multimedia-slot-preview img { width: 100%; height: 100%; object-fit: cover; display:block; }
                            .multimedia-slot-empty { color: #fca5a5; font-size: 10px; text-transform: uppercase; letter-spacing: .08em; font-weight: 700; text-align: center; padding: 0 8px; }
                            .multimedia-slot-card.is-active { border-color: rgba(251,191,36,0.96); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(251,191,36,0.32), 0 0 20px rgba(251,191,36,0.22); }
                            .multimedia-slot-actions { display:grid; gap:6px; margin-top:8px; }
                            .multimedia-slot-assign-btn, .multimedia-slot-add-btn { width:100%; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; cursor:pointer; transition:filter .16s ease, transform .16s ease; }
                            .multimedia-slot-assign-btn { border:1px solid rgba(203,213,225,0.9); background: linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%); color:#f8fafc; box-shadow: inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45); }
                            .multimedia-slot-assign-btn.is-selected { border-color: rgba(74,222,128,0.98); background: linear-gradient(160deg, rgba(22,163,74,0.98) 0%, rgba(34,197,94,0.94) 45%, rgba(20,83,45,0.98) 100%); color:#ecfdf5; box-shadow: inset 0 1px 0 rgba(220,252,231,0.55), inset 0 -1px 0 rgba(5,46,22,0.62), 0 0 16px rgba(74,222,128,0.95), 0 0 34px rgba(34,197,94,0.82); filter: brightness(1.24) saturate(1.2); }
                            .multimedia-slot-add-btn { border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; box-shadow:0 0 12px rgba(34,211,238,0.22); }
                            .multimedia-slot-assign-btn:hover, .multimedia-slot-add-btn:hover { transform: translateY(-1px); filter: brightness(1.08); }
                        </style>
                    </head>
                    <body class="text-slate-200">
                        <main class="min-h-screen p-4 md:p-8">
                            <section class="gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-6xl mx-auto">
                                <h1 class="font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide">Multimedia</h1>
                                <p class="text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2">${_?.nombre||"Personaje"}</p>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-6 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">Galería</h2>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${JJ}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-cyan-200/20 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-3">5 principales</h2>
                                    <div class="multimedia-slots-grid">${A}</div>
                                </article>
                                <article class="surface-panel rounded-2xl border border-rose-300/25 mt-4 p-4">
                                    <h2 class="font-black uppercase tracking-wide mb-2">Imágenes rotas</h2>
                                    <p class="text-xs text-rose-100/80 uppercase tracking-[0.12em] mb-3">Solo fotos que ya no cargan. Tocá una para corregir URL y etiqueta.</p>
                                    <div id="brokenGalleryGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${k}</div>
                                    <p id="brokenGalleryEmpty" class="text-sm text-slate-300">No hay imágenes rotas detectadas.</p>
                                </article>
                            </section>
                        </main>
                        <script>
                            const profileId = ${JSON.stringify(R)};
                            const validLabels = ${JSON.stringify(XJ)};
                            const dbRef = window.opener && window.opener.firebase && window.opener.firebase.database ? window.opener.firebase.database() : null;
                            const normalizeLabel = (rawLabel = '') => validLabels.includes(rawLabel) ? rawLabel : '';
                            const brokenCards = new Set();
                            const DND_PAYLOAD_TYPE = 'application/x-battle-slot-item';
                            const LONG_PRESS_MS = 280;
                            let longPressTimer = null;
                            let touchPayload = null;
                            const isImagePayload = (payload) => String(payload?.mediaType || '').trim() === 'image';
                            const assignToSlot = (payload = {}, slotId = '') => {
                                if (!window.opener || !slotId || !isImagePayload(payload)) return false;
                                const sourceIndex = Number(payload.sourceIndex);
                                if (!Number.isInteger(sourceIndex) || sourceIndex < 0) return false;
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${R}', slotId, index: sourceIndex, mediaType: 'image' }, '*');
                                return true;
                            };
                            const syncBrokenEmptyState = () => {
                                const grid = document.getElementById('brokenGalleryGrid');
                                const empty = document.getElementById('brokenGalleryEmpty');
                                if (!grid || !empty) return;
                                const visibleBrokenCount = Array.from(grid.querySelectorAll('[data-broken-card="true"]'))
                                    .filter((card) => card.style.display !== 'none').length;
                                empty.style.display = visibleBrokenCount ? 'none' : 'block';
                            };
                            const saveGalleryItem = async ({ sourceTag = 'fotos', sourceIndex = -1, url = '', label = '' }) => {
                                if (!dbRef || !profileId || sourceIndex < 0) return false;
                                const galleryRef = dbRef.ref(\`perfiles/\${profileId}/galeria/\${sourceTag}\`);
                                const snapshot = await galleryRef.once('value');
                                const currentItems = Array.isArray(snapshot.val()) ? snapshot.val() : [];
                                if (!currentItems[sourceIndex]) return false;
                                const rawItem = currentItems[sourceIndex];
                                const nextItem = typeof rawItem === 'string'
                                    ? { url: String(url || '').trim(), label: normalizeLabel(label), type: 'image', autor: '' }
                                    : { ...rawItem, url: String(url || '').trim(), label: normalizeLabel(label), autor: normalizeGalleryAuthor(rawItem?.autor) };
                                currentItems[sourceIndex] = nextItem;
                                await galleryRef.set(currentItems);
                                return true;
                            };
                            let activeSlotSelectionId = '';
                            const slotCards = Array.from(document.querySelectorAll('.multimedia-slot-card'));
                            const slotAssignButtons = Array.from(document.querySelectorAll('[data-slot-assign]'));
                            const updateSlotCardAssignedState = (slotId = '', assignedUrl = '') => {
                                if (!slotId) return;
                                const card = slotCards.find((slotCard) => slotCard.dataset.slotId === slotId);
                                if (!card) return;
                                const normalizedUrl = String(assignedUrl || '').trim();
                                const isAssigned = Boolean(normalizedUrl);
                                card.classList.toggle('is-assigned', isAssigned);
                                card.classList.toggle('is-missing', !isAssigned);
                                const stateBadge = card.querySelector('.multimedia-slot-state');
                                if (stateBadge) {
                                    stateBadge.textContent = isAssigned ? 'VERDE' : 'ROJO';
                                }
                                const previewContainer = card.querySelector('.multimedia-slot-preview');
                                if (previewContainer) {
                                    previewContainer.innerHTML = isAssigned
                                        ? '<img alt="" loading="lazy" />'
                                        : '<span class="multimedia-slot-empty">Sin foto designada</span>';
                                    if (isAssigned) {
                                        const img = previewContainer.querySelector('img');
                                        if (img) {
                                            img.src = normalizedUrl;
                                            img.alt = slotConfigById[slotId]?.label || 'Foto designada';
                                        }
                                    }
                                }
                            };
                            const setActiveSlotSelection = (slotId = '') => {
                                activeSlotSelectionId = slotId || '';
                                slotCards.forEach((card) => {
                                    const isActive = activeSlotSelectionId && card.dataset.slotId === activeSlotSelectionId;
                                    card.classList.toggle('is-active', Boolean(isActive));
                                });
                                slotAssignButtons.forEach((button) => {
                                    const isSelected = activeSlotSelectionId && button.dataset.slotAssign === activeSlotSelectionId;
                                    button.classList.toggle('is-selected', Boolean(isSelected));
                                });
                            };
                            const slotConfigById = ${JSON.stringify(iJ.reduce((V,I)=>{V[I.id]=I;return V},{}))};
                            const assignBattlePhotoFromGallery = async ({ slotId = '', sourceIndex = -1, mediaType = 'image', cardButton = null }) => {
                                if (!slotId || sourceIndex < 0 || mediaType !== 'image') return false;
                                if (slotId === 'perfil') {
                                    window.alert('El casillero Perfil usa la foto principal del personaje.');
                                    return false;
                                }
                                const slotConfig = slotConfigById[slotId];
                                if (!slotConfig) return false;
                                try {
                                    if (dbRef && profileId) {
                                        const selectedUrl = String(cardButton?.dataset.url || '').trim();
                                        await dbRef.ref(\`perfiles/\${profileId}/batallaFotosPreferidas/\${slotId}\`).set(selectedUrl);
                                        updateSlotCardAssignedState(slotId, selectedUrl);
                                    } else if (window.opener) {
                                        const selectedUrl = String(cardButton?.dataset.url || '').trim();
                                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: profileId, slotId, index: sourceIndex, mediaType: 'image' }, '*');
                                        updateSlotCardAssignedState(slotId, selectedUrl);
                                    } else {
                                        return false;
                                    }
                                    setActiveSlotSelection('');
                                    return true;
                                } catch (error) {
                                    console.error('No se pudo asignar la imagen del casillero:', error);
                                    window.alert('No se pudo asignar la imagen al casillero.');
                                    return false;
                                }
                            };
                            document.querySelectorAll('[data-slot-assign]').forEach((button) => {
                                button.addEventListener('click', () => {
                                    const slotId = button.dataset.slotAssign || '';
                                    setActiveSlotSelection(slotId);
                                    
                                });
                            });
                            document.querySelectorAll('[data-slot-add]').forEach((button) => {
                                button.addEventListener('click', () => {
                                    const slotId = button.dataset.slotAdd || '';
                                    window.alert(\`Usá la edición de miniatura de Galería para cargar o actualizar la URL/archivo del casillero \${slotId}.\`);
                                });
                            });

                            document.querySelectorAll('.multimedia-thumb-btn').forEach((button) => {
                                button.addEventListener('dragstart', (event) => {
                                    const payload = {
                                        sourceIndex: Number(button.dataset.index),
                                        mediaType: button.dataset.mediaType || 'image',
                                        url: button.dataset.url || ''
                                    };
                                    if (!isImagePayload(payload)) return;
                                    event.dataTransfer.effectAllowed = 'copy';
                                    event.dataTransfer.setData(DND_PAYLOAD_TYPE, JSON.stringify(payload));
                                    event.dataTransfer.setData('text/plain', payload.url || '');
                                });
                                const isBrokenCard = button.dataset.brokenCard === 'true';
                                const img = button.querySelector('img');
                                if (isBrokenCard && img) {
                                    img.addEventListener('error', () => {
                                        button.style.display = '';
                                        brokenCards.add(button.dataset.index || '');
                                        syncBrokenEmptyState();
                                    });
                                    img.addEventListener('load', () => {
                                        button.style.display = 'none';
                                        brokenCards.delete(button.dataset.index || '');
                                        syncBrokenEmptyState();
                                    });
                                }
                                button.addEventListener('click', async () => {
                                    const sourceTag = button.dataset.tag || 'fotos';
                                    const sourceIndex = Number(button.dataset.index);
                                    if (activeSlotSelectionId) {
                                        const assigned = await assignBattlePhotoFromGallery({ slotId: activeSlotSelectionId, sourceIndex, mediaType: 'image', cardButton: button });
                                        if (assigned) return;
                                    }
                                    const currentUrl = button.dataset.url || '';
                                    const currentLabel = button.dataset.label || '';
                                    const nextUrl = window.prompt('Nueva URL de la multimedia:', currentUrl);
                                    if (nextUrl === null) return;
                                    const nextLabel = window.prompt('Nueva etiqueta (C, P, B, N, S, E, X):', currentLabel || 'C');
                                    if (nextLabel === null) return;
                                    try {
                                        const saved = await saveGalleryItem({ sourceTag, sourceIndex, url: nextUrl, label: nextLabel });
                                        if (!saved) return;
                                        button.dataset.url = nextUrl.trim();
                                        button.dataset.label = normalizeLabel((nextLabel || '').trim().toUpperCase());
                                        const img = button.querySelector('img');
                                        const badge = button.querySelector('.multimedia-thumb-label');
                                        if (img) img.src = nextUrl.trim();
                                        if (badge) badge.textContent = button.dataset.label || 'SIN ETIQUETA';
                                        if (isBrokenCard) syncBrokenEmptyState();
                                    } catch (error) {
                                        console.error('No se pudo guardar multimedia:', error);
                                        window.alert('No se pudo actualizar esta multimedia.');
                                    }
                                });
                            });
                            document.querySelectorAll('.multimedia-slot-card').forEach((slotCard) => {
                                const slotId = slotCard.dataset.slotId || '';
                                if (!slotId || slotId === 'perfil') return;
                                slotCard.addEventListener('dragover', (event) => {
                                    let payload = null;
                                    try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                                    if (!isImagePayload(payload)) return;
                                    event.preventDefault();
                                    event.dataTransfer.dropEffect = 'copy';
                                    slotCard.classList.add('drop-hover');
                                });
                                slotCard.addEventListener('dragleave', () => {
                                    slotCard.classList.remove('drop-hover', 'drop-active');
                                });
                                slotCard.addEventListener('drop', (event) => {
                                    event.preventDefault();
                                    slotCard.classList.remove('drop-hover');
                                    slotCard.classList.add('drop-active');
                                    let payload = null;
                                    try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                                    assignToSlot(payload, slotId);
                                    setTimeout(() => slotCard.classList.remove('drop-active'), 160);
                                });
                            });
                            document.querySelectorAll('.multimedia-thumb-btn').forEach((button) => {
                                button.addEventListener('pointerdown', (event) => {
                                    if (button.dataset.mediaType !== 'image') return;
                                    clearTimeout(longPressTimer);
                                    touchPayload = {
                                        sourceIndex: Number(button.dataset.index),
                                        mediaType: button.dataset.mediaType || 'image',
                                        url: button.dataset.url || ''
                                    };
                                    longPressTimer = setTimeout(() => {
                                        button.style.outline = '2px solid rgba(34,211,238,0.85)';
                                    }, LONG_PRESS_MS);
                                });
                                button.addEventListener('pointerup', (event) => {
                                    clearTimeout(longPressTimer);
                                    button.style.outline = '';
                                    if (!touchPayload) return;
                                    const slotEl = document.elementFromPoint(event.clientX, event.clientY)?.closest('.multimedia-slot-card[data-slot-id]');
                                    if (slotEl && slotEl.dataset.slotId && slotEl.dataset.slotId !== 'perfil') {
                                        assignToSlot(touchPayload, slotEl.dataset.slotId);
                                    }
                                    touchPayload = null;
                                });
                                button.addEventListener('pointercancel', () => {
                                    clearTimeout(longPressTimer);
                                    button.style.outline = '';
                                    touchPayload = null;
                                });
                            });

                        </script>
                    </body>
                </html>
            `);O.document.close()},H1=({isOpen:_=!1,profile:O=null,onClose:R=()=>{}})=>{const[T,F]=D(!0),[v,c]=D(!0);n(()=>{if(!_)return;F(!0);c(!0)},[_,O?.firebaseId]);if(!_||!O)return null;const jJ=Array.isArray(O?.galeria?.fotos)?O.galeria.fotos.map((k)=>e(k,"image")).filter((k)=>k.url):[],JJ=Object.entries(O?.puntuaciones||{}).map(([k,A])=>({label:k,value:Number(A)||0})).sort((k,A)=>A.value-k.value).slice(0,5);return Q("div",{className:"fixed inset-0 z-[180] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8",onClick:R,role:"presentation",children:Q("section",{className:"gothic-frame surface-panel surface-panel--neon rounded-[2rem] p-6 md:p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative",onClick:(k)=>k.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Multimedia del personaje",children:[Q("button",{type:"button",onClick:R,className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100",children:"✕"},void 0,!1,void 0,this),Q("h2",{className:"font-title text-center text-3xl md:text-4xl text-white uppercase tracking-wide",children:"Multimedia"},void 0,!1,void 0,this),Q("p",{className:"text-center text-cyan-100/80 text-xs uppercase tracking-[0.2em] mt-2",children:O?.nombre||"Personaje"},void 0,!1,void 0,this),Q("div",{className:"mt-6 space-y-4",children:[Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>F((k)=>!k),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"Galería"},void 0,!1,void 0,this),Q("span",{children:T?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),T&&Q("div",{className:"px-4 pb-4 grid grid-cols-2 md:grid-cols-4 gap-3",children:jJ.length?jJ.map((k,A)=>Q("div",{className:"rounded-xl overflow-hidden border border-slate-600/40 bg-slate-900/40",children:Q("img",{src:k.url,alt:`Multimedia ${A+1}`,className:"w-full h-36 object-cover",loading:"lazy"},void 0,!1,void 0,this)},`${k.url}-${A}`,!1,void 0,this)):Q("p",{className:"text-sm text-slate-300 col-span-full",children:"Sin contenido en galería."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"surface-panel rounded-2xl border border-cyan-200/20",children:[Q("button",{type:"button",onClick:()=>c((k)=>!k),className:"w-full px-4 py-3 text-left font-black uppercase tracking-wide flex items-center justify-between",children:[Q("span",{children:"5 Principales"},void 0,!1,void 0,this),Q("span",{children:v?"−":"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),v&&Q("div",{className:"px-4 pb-4 space-y-2",children:JJ.length?JJ.map((k)=>Q("div",{className:"surface-panel rounded-xl px-3 py-2 flex items-center justify-between",children:[Q("span",{className:"text-sm text-slate-200 uppercase",children:k.label},void 0,!1,void 0,this),Q("strong",{className:"text-cyan-200",children:k.value},void 0,!1,void 0,this)]},k.label,!0,void 0,this)):Q("p",{className:"text-sm text-slate-300",children:"Sin puntajes cargados."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)},CZ=async(_="",{timeoutMs:O=12000,retries:R=1}={})=>{const T=String(_||"").trim();if(!T)return!0;const F=()=>new Promise((v)=>{const c=new Image;let jJ=!1;const JJ=(A)=>{if(jJ)return;jJ=!0;c.onload=null;c.onerror=null;v(Boolean(A))},k=window.setTimeout(()=>JJ(!0),O);c.onload=()=>{clearTimeout(k);const A=Number(c.naturalWidth)>0&&Number(c.naturalHeight)>0;JJ(!A)};c.onerror=()=>{clearTimeout(k);JJ(!0)};c.src=T});for(let v=0;v<=R;v+=1)if(!await F())return!1;return!0},RZ=(_,O)=>{const R=(O||"").trim().toLowerCase(),T=Array.isArray(_?.galeria?.fotos)?_.galeria.fotos.map((N)=>e(N,"image")).filter((N)=>N.type==="image"&&N.url):[],v=ZJ(_?.fotos?.[0],"")||"https://via.placeholder.com/400x500";if(new Set(["rostro","ojos","boca","cabello","carisma","elegancia","dulzura","talento","estatura"]).has(R))return v;const jJ=(N=[])=>{const s=T.filter((EJ)=>N.includes(DZ(EJ)));if(!s.length)return"";const S=Math.floor(Math.random()*s.length);return s[S]?.url||""},JJ=l0(R),k=_X(JJ);if(!k)return v;const V=WJ(_?.batallaFotosPreferidas)[JJ];if(V){if(T.some((s)=>s.url===V))return V}return jJ(k.labels)||v},j1=(_="")=>o0.test((_||"").trim()),qQ="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20256%20256%27%3E%3Crect%20width%3D%27256%27%20height%3D%27256%27%20rx%3D%2740%27%20fill%3D%27%23020617%27/%3E%3Ctext%20x%3D%27128%27%20y%3D%27152%27%20text-anchor%3D%27middle%27%20font-size%3D%27120%27%3E%F0%9F%98%A2%3C/text%3E%3C/svg%3E",rX=`if(this.dataset.fallbackApplied==='true')return;this.dataset.fallbackApplied='true';this.src='${qQ}';this.style.objectFit='contain';this.style.padding='12px';this.style.background='#020617';this.alt='Imagen no disponible';`,wJ=(_)=>{const O=_?.currentTarget||_?.target;if(!O||O.dataset.fallbackApplied==="true")return;O.dataset.fallbackApplied="true";O.src=qQ;O.style.objectFit="contain";O.style.padding="12px";O.style.background="#020617";O.alt="Imagen no disponible"},R1="g2_elite_database_v4",B1="g2_elite_categories_v4",aJ=["Rostro","Ojos","Boca","Cabello","Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura","Sensualidad","Carisma","Elegancia","Dulzura","Talento"],eX=[...aJ],JY=[{id:"PROFESIONES",label:"Profesiones",description:"Compará perfiles por profesión."},{id:"NACIONALIDADES",label:"Nacionalidades",description:"Compará perfiles por nacionalidad."},{id:"EDADES",label:"Edades",description:"Compará perfiles por rango etario."},{id:"GENERAL",label:"General",description:"Modo libre sin segmentación extra."}],q1=JY.map((_)=>_.id),_Q=(_="")=>{return JY.find((R)=>R.id===_)?.label||"General"},_1=(_="")=>{const O=String(_||"").trim();if(!O)return"";return encodeURIComponent(O.toLowerCase())},W1=(_="")=>{const O=String(_||"").trim();if(!O)return"";try{return decodeURIComponent(O).toLowerCase()}catch{return O.toLowerCase()}},WQ=(_,O="GENERAL",R="")=>{const T=String(_||"").trim(),F=String(O||"GENERAL").trim().toUpperCase(),v=_1(R);if(!T)return"";return`${F}::${v||"all"}::${T}`},LJ=(_="")=>String(_||"").trim(),BZ=(_="")=>{const O=String(_||"").split("::");if(O.length<3)return{scopeId:"GENERAL",groupKey:"all",arenaName:""};const R=O.slice(2).join("::");return{scopeId:String(O[0]||"GENERAL").trim().toUpperCase()||"GENERAL",groupKey:W1(O[1]||"all")||"all",arenaName:String(R||"").trim()}},SQ=()=>aJ.reduce((_,O)=>{_[O]=0;return _},{}),TZ=[],QY={Cantante:{glyph:"crown",color:"rgba(34, 211, 238, 0.8)",tailwind:"cyan-400"},Actriz:{glyph:"theater",color:"rgba(34, 197, 94, 0.8)",tailwind:"green-500"},Modelo:{glyph:"floron",color:"rgba(168, 85, 247, 0.8)",tailwind:"purple-500"},NSFW:{glyph:"torch",color:"rgba(239, 68, 68, 0.8)",tailwind:"red-500"},Influencer:{glyph:"sigil",color:"rgba(236, 72, 153, 0.8)",tailwind:"pink-500"},"Bailarina y Atleta":{glyph:"floron",color:"rgba(249, 115, 22, 0.8)",tailwind:"orange-500"},Otro:{glyph:"sigil",color:"rgba(148, 163, 184, 0.8)",tailwind:"slate-400"}},T1=(_="")=>{const O=String(_||"").toLowerCase();if(O.includes("cantante"))return"crown";if(O.includes("nsfw"))return"torch";if(O.includes("actriz")||O.includes("actor"))return"theater";if(O.includes("modelo"))return"floron";if(O.includes("influencer"))return"sigil";if(O.includes("periodista"))return"quill";if(O.includes("bailarina"))return"floron";if(O.includes("atleta"))return"shield";return"shield"},O1=(_="")=>{const O=String(_||"").toLowerCase();if(O.includes("cantante"))return"\uD83C\uDFA4";if(O.includes("nsfw"))return"\uD83D\uDD25";if(O.includes("actriz")||O.includes("actor"))return"\uD83C\uDFAC";if(O.includes("modelo"))return"\uD83D\uDC60";if(O.includes("influencer"))return"\uD83D\uDCF1";if(O.includes("periodista"))return"\uD83D\uDC53";if(O.includes("bailarina"))return"\uD83D\uDC83";if(O.includes("atleta"))return"\uD83C\uDFCB️‍♀️";return"\uD83D\uDCD6"},xQ=(_="")=>{const O=String(_||"").trim(),R=QY[O]||QY.Otro,T=String(R?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 1)"),F=String(R?.color||"rgba(148, 163, 184, 0.8)").replace(/,\s*[\d.]+\)$/,", 0.75)");return{baseColor:T,glowColor:F}},A1=({variant:_="sigil",size:O=18,className:R="",tint:T="currentColor"})=>{const F={width:O,height:O,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:R};if(_==="crown")return Q("svg",{...F,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M3 17h18v3H3z"},void 0,!1,void 0,this),Q("path",{d:"M4 17l3-8 5 5 5-7 3 10"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="shield")return Q("svg",{...F,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 3l7 3v6c0 4.3-2.4 7-7 9-4.6-2-7-4.7-7-9V6l7-3z"},void 0,!1,void 0,this),Q("path",{d:"M9.5 11h5M12 8.5v5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="floron")return Q("svg",{...F,stroke:T,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M12 4v16"},void 0,!1,void 0,this),Q("path",{d:"M6 9c1.4 0 2.8.9 3.4 2.2C8.2 11.5 7 12.8 7 14.3 5.4 13.5 4.3 11.9 4.3 10 4.3 9.5 5 9 6 9z"},void 0,!1,void 0,this),Q("path",{d:"M18 9c-1.4 0-2.8.9-3.4 2.2 1.2.3 2.4 1.6 2.4 3.1 1.6-.8 2.7-2.4 2.7-4.3 0-.5-.7-1-1.7-1z"},void 0,!1,void 0,this),Q("circle",{cx:"12",cy:"12",r:"2.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="quill")return Q("svg",{...F,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M20 4c-7 1-11.5 5.2-13 12l4-1 1 4c6.8-2.4 8.4-8.4 8-15z"},void 0,!1,void 0,this),Q("path",{d:"M8 16l-4 4"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="torch")return Q("svg",{...F,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M9 13l6-6"},void 0,!1,void 0,this),Q("path",{d:"M8 14l2 2 2-2-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M11 16l-4 5h10l-4-5"},void 0,!1,void 0,this),Q("path",{d:"M15.5 4.5c.9 1.3.5 3.2-1 4.3-1.5-1.4-1.8-3.3-.8-4.9.6.1 1.2.3 1.8.6z"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);if(_==="theater")return Q("svg",{...F,stroke:T,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("path",{d:"M5 6h14v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"},void 0,!1,void 0,this),Q("path",{d:"M9 11h.01M15 11h.01"},void 0,!1,void 0,this),Q("path",{d:"M8.5 15c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"},void 0,!1,void 0,this)]},void 0,!0,void 0,this);return Q("svg",{...F,stroke:T,strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",children:[Q("circle",{cx:"12",cy:"12",r:"8.5"},void 0,!1,void 0,this),Q("path",{d:"M12 6v12M6 12h12"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},p=({name:_,size:O=20,className:R=""})=>{return Q("i",{"data-lucide":_.toLowerCase().replace(/([a-z])([A-Z])/g,"$1-$2"),style:{width:O,height:O},className:`inline-block ${R}`},void 0,!1,void 0,this)},AZ=({targetWindow:_,profileName:O,profession:R,photos:T,editingId:F,battlePhotoPrefs:v={},profilePhotoUrl:c=""})=>{if(!_||_.closed)return;const jJ=WJ(v),JJ=ZJ(String(c||"").trim(),""),k=(T||[]).map((A,V)=>{const I=e(A);return{...I,sourceTag:A?.sourceTag||(I.type==="video"?"videos":"fotos"),sourceIndex:typeof A?.sourceIndex==="number"?A.sourceIndex:V}}).filter((A)=>A.url);_.document.open();_.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Galería de ${O}</title>
                <style>
                    body {
                        background:
                            radial-gradient(circle at 20% 18%, rgba(255, 208, 140, 0.14), transparent 32%),
                            radial-gradient(circle at 82% 8%, rgba(184, 115, 51, 0.17), transparent 28%),
                            linear-gradient(180deg, #120f0a 0%, #1d160f 45%, #271b12 100%);
                        color: #f7ebd2;
                        font-family: 'Cinzel', 'Plus Jakarta Sans', serif;
                        padding: 40px;
                        margin: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .btn-critical-plate {
                        position: fixed;
                        top: 20px;
                        right: 30px;
                        padding: 10px 20px;
                        color: #ff3131;
                        font-weight: 800;
                        font-size: 11px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        background: #020617;
                        border: 2px solid #ff3131;
                        border-radius: 12px;
                        cursor: pointer;
                        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 0 0 2px rgba(255, 49, 49, 0.22), 4px 4px 0px #660000;
                        transition: all 0.3s ease;
                        text-shadow: 0 0 8px #ff3131;
                        z-index: 999;
                    }
                    .btn-critical-plate:hover {
                        background: #ff3131;
                        color: white;
                        box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 0 20px rgba(255,49,49,0.5);
                        transform: translateY(-1px);
                    }
                    .modal-url {
                        display: none;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: #0f172a;
                        padding: 30px;
                        border-radius: 18px;
                        border: 1px solid rgba(100, 116, 139, 0.45);
                        box-shadow: inset 0 1px 0 rgba(148, 163, 184, 0.18), 0 24px 48px rgba(0,0,0,0.55);
                        z-index: 1000;
                        width: 350px;
                    }
                    input {
                        width: 100%;
                        padding: 12px;
                        margin-top: 15px;
                        background: #020617;
                        border: 1px solid #334155;
                        color: #22d3ee;
                        border-radius: 8px;
                        outline: none;
                    }
                    h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; color: #fff; text-align: center; }
                    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; width: 100%; }
                    .fullscreen-viewer {
                        display: none;
                        position: fixed;
                        inset: 0;
                        z-index: 2000;
                        background:
                            radial-gradient(circle at 50% 20%, rgba(255, 214, 153, 0.08), transparent 42%),
                            rgba(16, 10, 4, 0.95);
                        backdrop-filter: blur(6px);
                    }
                    .fullscreen-viewer.open {
                        display: flex;
                    }
                    .viewer-close {
                        position: fixed;
                        top: calc(env(safe-area-inset-top, 0px) + 16px);
                        right: calc(env(safe-area-inset-right, 0px) + 16px);
                        z-index: 2100;
                        background: rgba(15, 23, 42, 0.9);
                        color: #f87171;
                        border: 1px solid rgba(248, 113, 113, 0.78);
                        border-radius: 999px;
                        width: 48px;
                        height: 48px;
                        cursor: pointer;
                        font-size: 30px;
                        font-weight: 900;
                        line-height: 1;
                        font-weight: 700;
                        box-shadow:
                            0 6px 16px rgba(0, 0, 0, 0.55),
                            inset 0 1px 0 rgba(255, 244, 214, 0.35),
                            inset 0 -2px 0 rgba(48, 28, 12, 0.55);
                        text-shadow: 0 0 6px rgba(0, 0, 0, 0.75);
                        transition: transform 0.14s ease, opacity 0.14s ease, box-shadow 0.2s ease, filter 0.2s ease;
                    }
                    .viewer-close:hover {
                        transform: scale(1.06);
                        filter: brightness(1.08);
                        box-shadow:
                            0 8px 18px rgba(0, 0, 0, 0.62),
                            inset 0 1px 0 rgba(255, 244, 214, 0.42),
                            inset 0 -2px 0 rgba(48, 28, 12, 0.62);
                    }
                    .viewer-close:focus-visible,
                    .viewer-nav:focus-visible {
                        outline: 3px solid #ffe0a8;
                        outline-offset: 3px;
                    }
                    .viewer-close:active,
                    .viewer-nav:active,
                    .viewer-control-btn:active {
                        transform: scale(0.95);
                        opacity: 0.85;
                    }
                    .viewer-stage {
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 32px 24px 112px;
                        box-sizing: border-box;
                    }
                    .viewer-slide {
                        position: absolute;
                        inset: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        visibility: hidden;
                        pointer-events: none;
                        transform: translate3d(0, 12px, 0) scale(0.992);
                        transition: opacity 260ms ease, transform 300ms ease, visibility 0s linear 300ms;
                        will-change: opacity, transform;
                    }
                    .viewer-slide.active {
                        opacity: 1;
                        visibility: visible;
                        pointer-events: auto;
                        transform: translate3d(0, 0, 0) scale(1);
                        transition: opacity 240ms ease, transform 260ms ease, visibility 0s linear 0s;
                    }
                    .viewer-slide img {
                        max-width: min(92vw, 1400px);
                        max-height: calc(100vh - 64px);
                        width: auto;
                        height: auto;
                        object-fit: contain;
                        border-radius: 20px;
                        border: 3px solid #c8a167;
                        box-shadow:
                            0 24px 52px rgba(0, 0, 0, 0.64),
                            0 0 0 3px rgba(83, 55, 27, 0.8),
                            inset 0 0 24px rgba(255, 223, 171, 0.12);
                    }
                    .viewer-nav {
                        position: relative;
                        z-index: 2100;
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                        border: 2px solid #d8b374;
                        background: linear-gradient(180deg, #624021 0%, #3a2512 100%);
                        color: #fff7e6;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        font-size: 28px;
                        font-weight: 900;
                        line-height: 1;
                        text-shadow: 0 0 5px rgba(0, 0, 0, 0.72);
                        box-shadow:
                            0 6px 16px rgba(0, 0, 0, 0.55),
                            inset 0 1px 0 rgba(255, 244, 214, 0.34),
                            inset 0 -2px 0 rgba(48, 28, 12, 0.55);
                        transition: transform 0.14s ease, opacity 0.14s ease, border-color 0.2s ease, color 0.2s ease, filter 0.2s ease;
                    }
                    .viewer-nav:hover {
                        transform: scale(1.06);
                        border-color: #f0c883;
                        color: #fff7e6;
                        filter: brightness(1.1);
                    }
                    .viewer-nav[disabled] {
                        opacity: 0.62;
                        cursor: default;
                        filter: grayscale(0.28);
                    }
                    .viewer-nav[disabled]:hover {
                        transform: none;
                        border-color: #d8b374;
                        color: #fff7e6;
                        filter: grayscale(0.28);
                    }
                    .viewer-hint {
                        position: fixed;
                        left: 50%;
                        bottom: calc(env(safe-area-inset-bottom, 0px) + 104px);
                        transform: translateX(-50%);
                        z-index: 2100;
                        padding: 10px 16px;
                        border-radius: 999px;
                        background: rgba(43, 29, 16, 0.72);
                        color: #f6e7ca;
                        border: 1px solid rgba(201, 162, 98, 0.72);
                        font-size: 12px;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                        pointer-events: none;
                    }
                    .viewer-controls {
                        position: fixed;
                        top: calc(env(safe-area-inset-top, 0px) + 16px);
                        left: calc(env(safe-area-inset-left, 0px) + 16px);
                        z-index: 2100;
                        display: flex;
                        gap: 10px;
                        padding: 8px 10px;
                        border-radius: 999px;
                        background: rgba(10, 24, 38, 0.35);
                        border: 1px solid rgba(56, 189, 248, 0.28);
                    }
                    .viewer-bottom-bar {
                        position: fixed;
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: calc(env(safe-area-inset-bottom, 0px) + 16px);
                        z-index: 2100;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        padding: 10px 12px;
                        border-radius: 999px;
                        background: rgba(25, 16, 8, 0.85);
                        border: 1px solid rgba(201, 162, 98, 0.72);
                        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
                    }
                    .viewer-control-btn {
                        border: 1px solid rgba(56, 189, 248, 0.5);
                        background: rgba(8, 47, 73, 0.52);
                        color: #bae6fd;
                        border-radius: 999px;
                        padding: 8px 14px;
                        min-width: 44px;
                        min-height: 44px;
                        font-size: 10px;
                        text-transform: uppercase;
                        letter-spacing: 0.2em;
                        font-weight: 900;
                        cursor: pointer;
                    }
                    .viewer-control-btn.random-active {
                        border-color: rgba(232, 121, 249, 0.85);
                        color: #f5d0fe;
                        background: rgba(192, 38, 211, 0.35);
                    }
                    @media (max-width: 640px) {
                        .viewer-stage {
                            padding: calc(env(safe-area-inset-top, 0px) + 18px) 16px calc(env(safe-area-inset-bottom, 0px) + 132px);
                        }
                        .viewer-close {
                            top: calc(env(safe-area-inset-top, 0px) + 12px);
                            right: calc(env(safe-area-inset-right, 0px) + 12px);
                            width: 48px;
                            height: 48px;
                        }
                        .viewer-nav {
                            width: 48px;
                            height: 48px;
                            font-size: 22px;
                        }
                        .viewer-hint {
                            bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
                            padding: 8px 12px;
                            font-size: 10px;
                            max-width: calc(100vw - 120px);
                            text-align: center;
                        }
                        .viewer-controls {
                            top: calc(env(safe-area-inset-top, 0px) + 12px);
                            left: calc(env(safe-area-inset-left, 0px) + 12px);
                            gap: 8px;
                            padding: 7px 9px;
                        }
                        .viewer-control-btn {
                            padding: 9px 12px;
                            font-size: 9px;
                            letter-spacing: 0.16em;
                            min-width: 46px;
                            min-height: 46px;
                        }
                        .viewer-bottom-bar {
                            bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
                            gap: 8px;
                            padding: 8px 10px;
                            width: min(94vw, 430px);
                            justify-content: space-between;
                        }
                    }
                </style>
            </head>
            <body>
                <h1>Galería de ${O}</h1>
                <button class="btn-critical-plate" onclick="document.getElementById('miModal').style.display='block'">
                    AGREGAR ARCHIVO
                </button>

                <div id="miModal" class="modal-url">
                    <h2 style="margin:0; font-size: 14px; color: #94a3b8;">PEGAR URL DEL ARCHIVO</h2>
                    <input type="text" id="nuevaFotoUrl" placeholder="https://ejemplo.com/foto.jpg o https://youtube.com/...">
                    <label for="nuevoArchivoLocal" style="display:block; margin-top: 14px; font-size: 10px; font-weight: 900; letter-spacing: 0.14em; color: #94a3b8; text-transform: uppercase;">o subir desde escritorio</label>
                    <input type="file" id="nuevoArchivoLocal" accept="image/*,video/*,.gif" multiple style="width: 100%; margin-top: 8px; padding: 10px; background: #020617; border: 1px dashed rgba(34,211,238,0.65); color: #e2e8f0; border-radius: 8px; outline: none; font-size: 12px; box-shadow: 0 0 10px rgba(34,211,238,0.18);">
                    <select id="nuevoArchivoTipo" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        <option value="image">Imagen</option>
                        <option value="video">Video</option>
                    </select>
                    <select id="nuevaFotoEtiqueta" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                        ${XJ.map((A)=>`<option value="${A}">Etiqueta ${A}</option>`).join("")}
                    </select>
                    <input type="text" id="nuevaFotoAutor" placeholder="Autor (opcional)" style="width: 100%; padding: 12px; margin-top: 15px; background: #020617; border: 1px solid rgba(71,85,105,0.92); color: #e2e8f0; border-radius: 8px; outline: none; box-shadow: inset 0 1px 0 rgba(148,163,184,0.18);">
                    <input type="hidden" id="slotSelectionId" value="">
                    <p id="slotGalleryHint" style="display:none; margin:10px 0 0; font-size:11px; color:#93c5fd;">Tip: para “Elegir desde galería” tocá cualquier imagen para asignarla.</p>
                    <button onclick="addMediaFromModal()"
                        style="margin-top: 15px; width: 100%; padding: 10px; background: linear-gradient(180deg, rgba(14,116,144,0.95), rgba(8,47,73,0.95)); color: #ecfeff; border: 1px solid rgba(103,232,249,0.9); border-radius: 8px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 0 0 14px rgba(34,211,238,0.4);">
                        Guardar
                    </button>
                    <button id="modalPlayFullscreenButton" type="button" onclick="startFullscreenPlaybackFromModal(event)"
                        style="margin-top: 10px; width: 100%; padding: 10px; background: linear-gradient(180deg, rgba(30,64,175,0.95), rgba(30,58,138,0.95)); color: #dbeafe; border: 1px solid rgba(147,197,253,0.9); border-radius: 8px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em; box-shadow: 0 0 14px rgba(59,130,246,0.38);">
                        Play pantalla completa
                    </button>
                </div>

                <details open style="width:100%; margin-bottom: 20px; border-radius: 12px; border: 1px solid rgba(148,163,184,0.28); background: rgba(2,6,23,0.45);">
                    <summary style="cursor:pointer; list-style:none; padding: 12px 14px; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 900; color: #f8fafc;">
                        5 Principales
                    </summary>
                    <div style="padding: 0 14px 14px; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 10px;">
                    ${iJ.map((A)=>{const V=A.id==="perfil",I=V?JJ:jJ[A.id]||"",N=Boolean(I),s=!V;return`
                            <div class="gallery-slot-card" data-slot-id="${A.id}" style="border:1px solid ${N?"rgba(74,222,128,0.95)":"rgba(248,113,113,0.95)"}; border-radius:10px; padding:10px; background:${N?"linear-gradient(155deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.82) 45%, rgba(5,46,22,0.96) 100%)":"linear-gradient(155deg, rgba(127,29,29,0.96) 0%, rgba(185,28,28,0.84) 45%, rgba(69,10,10,0.96) 100%)"}; box-shadow: inset 0 2px 0 rgba(255,255,255,0.24), inset 0 -2px 0 rgba(2,6,23,0.45), inset 0 0 0 1px ${N?"rgba(187,247,208,0.25)":"rgba(254,202,202,0.22)"}, 0 8px 16px rgba(2,6,23,0.45), 0 0 18px ${N?"rgba(74,222,128,0.35)":"rgba(248,113,113,0.3)"}; position: relative;">
                                <div style="position:absolute; inset:1px; border-radius:9px; pointer-events:none; background: linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.05) 22%, rgba(255,255,255,0) 42%, rgba(2,6,23,0.22) 78%, rgba(2,6,23,0.42) 100%);"></div>
                                <div style="font-size:10px; color:#f8fafc; font-weight:900; letter-spacing:0.12em; text-transform:uppercase; position:relative;">${A.label}</div>
                                <div style="font-size:11px; color:${N?"#dcfce7":"#fee2e2"}; margin-top:6px; font-weight:800; position:relative; text-shadow: 0 1px 0 rgba(15,23,42,0.65);">
                                    Estado: ${N?"Asignada":"No asignada"}
                                </div>
                                <div style="margin-top:8px; border-radius:8px; overflow:hidden; aspect-ratio:4/3; border:1px dashed rgba(148,163,184,0.45); background: rgba(2,6,23,0.86); display:flex; align-items:center; justify-content:center;">
                                    ${N?`<img src="${I}" alt="Vista previa ${A.label}" onerror="${rX}" style="width:100%; height:100%; object-fit:cover; display:block;" />`:'<span style="font-size:10px; color:#fca5a5; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; text-align:center; padding:0 8px;">Sin foto designada</span>'}
                                </div>
                                <div style="display:grid; gap:6px; margin-top:8px;">
                                    <button
                                        type="button"
                                        onclick="event.stopPropagation(); openSlotActionModal('${A.id}', 'url');"
                                        style="width:100%; border:1px solid rgba(125,211,252,0.6); background: rgba(2,6,23,0.82); color:#e2e8f0; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: 0 0 12px rgba(34,211,238,0.22);"
                                    >
                                        Agregar URL/Archivo
                                    </button>
                                    ${s?`<button
                                        type="button"
                                        class="slot-gallery-select-btn"
                                        data-slot-id="${A.id}"
                                        onclick="event.stopPropagation(); selectSlotFromGallery('${A.id}');"
                                        style="width:100%; border:1px solid rgba(203,213,225,0.92); background: linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%); color:#f8fafc; border-radius:8px; padding:6px 8px; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; box-shadow: inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45); transition: box-shadow 180ms ease, border-color 180ms ease, filter 180ms ease, background 180ms ease;"
                                    >
                                        Designar de galería
                                    </button>`:""}
                                </div>
                            </div>
                        `}).join("")}
                    </div>
                </details>

                <div class="grid" id="galleryGrid">
                    ${k.length?k.map((A,V)=>{const I=J1(A),N=DZ(A),s=lJ(N),S={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},EJ=S[R?.toUpperCase()]||S.DEFAULT;return`
                        <div
                            class="gallery-card"
                            data-gallery-index="${V}"
                            data-source-index="${A.sourceIndex}"
                            data-media-type="${oJ(A)}"
                            data-url="${I}"
                            data-compatible-slots="${N}"
                            draggable="${oJ(A)==="image"?"true":"false"}"
                            title="Abrir visor de pantalla completa"
                            style="
                                aspect-ratio: 1/1;
                                border-radius: 15px;
                                overflow: hidden;
                                border: 2px solid ${EJ.color};
                                box-shadow: 0 0 15px ${EJ.sombra};
                                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                                cursor: ${oJ(A)==="image"?"grab":"pointer"};
                                position: relative;
                                background: #0f172a;
                            "
                            onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 0 35px ${EJ.color}, inset 0 0 15px ${EJ.sombra}'; this.style.zIndex='10';"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px ${EJ.sombra}'; this.style.zIndex='1';"
                        >
                           <button
                            onclick="event.stopPropagation(); window.opener.postMessage({type: 'DELETE_IMAGE', index: ${A.sourceIndex}, mediaType: '${oJ(A)}', id: '${F}'}, '*');"
                            style="
                                position: absolute;
                                top: 5px;
                                right: 5px;
                                z-index: 20;
                                background: #ef4444;
                                color: white;
                                border: none;
                                width: 22px;
                                height: 22px;
                                border-radius: 50%;
                                cursor: pointer;
                                font-weight: bold;
                                font-size: 12px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
                            "
                            aria-label="Eliminar elemento de galería"
                            type="button"
                        >✕</button>
                        ${oJ(A)==="video"?(()=>{const d=jQ(I);if(d)return`<div style="width: 100%; height: 100%; background: radial-gradient(circle at top, rgba(34,211,238,0.35), rgba(15,23,42,0.96)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding: 18px; box-sizing:border-box; text-align:center;"><div style="width:64px; height:64px; border-radius:999px; border:1px solid rgba(34,211,238,0.5); background:rgba(15,23,42,0.75); display:flex; align-items:center; justify-content:center; color:#22d3ee; font-size:28px;">▶</div><div style="font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#e2e8f0;">Video embebido</div><div style="font-size:11px; color:#94a3b8; max-width:100%; word-break:break-word;">${d.provider.toUpperCase()}</div></div>`;return`<video src="${I}" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline preload="metadata"></video>`})():`<img src="${I}" alt="Imagen de la galería" onerror="${rX}" style="width: 100%; height: 100%; object-fit: cover;" />`}
                        <div style="position:absolute; left: 12px; top: 12px; z-index: 15; padding: 6px 10px; border-radius: 999px; background: rgba(2,6,23,0.72); border: 1px solid rgba(148,163,184,0.24); color: #e2e8f0; display:flex; align-items:center; justify-content:center; font-size: 10px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; backdrop-filter: blur(8px);">${oJ(A)==="video"?"VIDEO":"IMG"}</div>
                        ${N?`<div style="position:absolute; left: 50%; bottom: 10px; transform: translateX(-50%); z-index: 15; min-width: 52px; height: 30px; padding: 0 14px; border-radius: 999px; background: ${s.bg}; border: 1px solid ${s.border}; color: ${s.text}; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight: 900; letter-spacing: 0.24em; box-shadow: 0 0 14px ${s.glow}, 0 0 24px ${s.glow}; text-shadow: 0 0 10px ${s.glow}; backdrop-filter: blur(8px);">${N}</div>`:""}
                        ${A.autor?`<div style="position:absolute; left:10px; right:10px; bottom:${N?"48px":"10px"}; z-index:15; padding:6px 8px; border-radius:10px; background:rgba(2,6,23,0.74); border:1px solid rgba(148,163,184,0.3); color:#e2e8f0; font-size:10px; line-height:1.2; font-weight:700; letter-spacing:0.04em; text-align:left; backdrop-filter:blur(6px);">Autor: ${A.autor}</div>`:""}
                        </div>
                    `}).join(""):'<p style="text-align:center; grid-column: 1/-1; color: #64748b;">No hay archivos cargados.</p>'}
                </div>

                <div id="fullscreenViewer" class="fullscreen-viewer">
                    <button class="viewer-close" onclick="closeFullscreenViewer()" aria-label="Cerrar visor">✕</button>
                    <div class="viewer-bottom-bar">
                        <button id="viewerRandomToggle" class="viewer-control-btn" type="button" onclick="toggleViewerRandom(event)">Random Off</button>
                        <button id="viewerPlayToggle" class="viewer-control-btn viewer-control-btn--center" type="button" onclick="toggleViewerAutoplay(event)">Play</button>
                        <button class="viewer-nav next" id="viewerNext" onclick="showNextViewerPhoto(event)" aria-label="Foto siguiente">→</button>
                    </div>
                    <div class="viewer-hint">Usá ← → para cambiar y Escape para salir</div>
                    <div class="viewer-stage" id="viewerStage">
                        ${k.map((A,V)=>{const I=oJ(A),N=jQ(A.url);return`
                            <div class="viewer-slide" id="viewer-slide-${V}">
                                ${I==="video"?N?`<iframe src="${N.src}" title="${N.title} ${V+1}" style="width:min(92vw, 1400px); height:min(75vh, 820px); border:0; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<video src="${A.url}" controls playsinline preload="metadata" style="max-width:min(92vw, 1400px); max-height:calc(100vh - 64px); width:auto; height:auto; border-radius:24px; box-shadow:0 0 40px rgba(34, 211, 238, 0.2); background:#000;"></video>`:`<img src="${A.url}" alt="Vista completa ${V+1}" onerror="${rX}" />`}
                            </div>`}).join("")}
                    </div>
                </div>

                <script>
                    const viewer = document.getElementById('fullscreenViewer');
                    const viewerStage = document.getElementById('viewerStage');
                    const galleryGrid = document.getElementById('galleryGrid');
                    const viewerSlides = Array.from(document.querySelectorAll('.viewer-slide'));
                    const viewerNextButton = document.getElementById('viewerNext');
                    const viewerPlayToggleButton = document.getElementById('viewerPlayToggle');
                    const viewerRandomToggleButton = document.getElementById('viewerRandomToggle');
                    const modalPlayFullscreenButton = document.getElementById('modalPlayFullscreenButton');
                    const VALID_FILE_MIME_PREFIXES = ['image/', 'video/'];
                    const VALID_FILE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'mp4', 'webm', 'ogg', 'mov', 'm4v'];
                    const MAX_LOCAL_MEDIA_BYTES = 9 * 1024 * 1024;
                    const VIEWER_IMAGE_TIMEOUT_MS = 7000;
                    const VIEWER_VIDEO_FALLBACK_TIMEOUT_MS = 30000;
                    const VIEWER_RETRY_DELAY_MS = 900;
                    const VIEWER_PRELOAD_RADIUS = 1;
                    const VIEWER_STATES = Object.freeze({
                        IDLE: 'idle',
                        SHOWING_IMAGE: 'showing-image',
                        PLAYING_VIDEO: 'playing-video',
                        TRANSITIONING: 'transitioning'
                    });
                    let currentViewerIndex = 0;
                    let viewerAutoplay = false;
                    let viewerRandom = false;
                    let viewerAutoplayTimeout = null;
                    let viewerState = VIEWER_STATES.IDLE;
                    let viewerTransitionToken = 0;
                    let viewerRecoveryInProgress = false;
                    let activeSlotSelectionId = '';
                    const DND_PAYLOAD_TYPE = 'application/x-battle-slot-item';
                    const LONG_PRESS_MS = 280;
                    let longPressTimer = null;
                    let touchPayload = null;
                    const SWIPE_DISTANCE_THRESHOLD = 72;
                    const SWIPE_VELOCITY_THRESHOLD = 0.35;
                    const SWIPE_FEEDBACK_MAX_TRANSLATE = 52;
                    const SWIPE_VERTICAL_LOCK_RATIO = 1.2;
                    let viewerSwipeState = {
                        active: false,
                        pointerId: null,
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        startTime: 0,
                        isHorizontal: false,
                        isVertical: false,
                        blockedByMediaControl: false
                    };

                    function isAllowedFileType(file) {
                        if (!file) return false;
                        const mime = String(file.type || '').toLowerCase();
                        const ext = String(file.name || '').split('.').pop()?.toLowerCase() || '';
                        return VALID_FILE_MIME_PREFIXES.some((prefix) => mime.startsWith(prefix)) || VALID_FILE_EXTENSIONS.includes(ext);
                    }

                    function openSlotActionModal(slotId, mode = '') {
                        activeSlotSelectionId = slotId || '';
                        const modal = document.getElementById('miModal');
                        const galleryHint = document.getElementById('slotGalleryHint');
                        const slotInput = document.getElementById('slotSelectionId');
                        if (slotInput) slotInput.value = activeSlotSelectionId;
                        if (galleryHint) {
                            galleryHint.style.display = mode === 'gallery' && slotId !== 'perfil' ? 'block' : 'none';
                        }
                        if (modal) modal.style.display = 'block';
                    }

                    function updateSlotGalleryButtons() {
                        const buttons = document.querySelectorAll('.slot-gallery-select-btn');
                        buttons.forEach((button) => {
                            const buttonSlotId = button.getAttribute('data-slot-id') || '';
                            const isActive = Boolean(activeSlotSelectionId) && buttonSlotId === activeSlotSelectionId;
                            if (isActive) {
                                button.style.borderColor = 'rgba(74,222,128,0.98)';
                                button.style.background = 'linear-gradient(160deg, rgba(22,163,74,0.98) 0%, rgba(34,197,94,0.94) 45%, rgba(20,83,45,0.98) 100%)';
                                button.style.color = '#ecfdf5';
                                button.style.boxShadow = 'inset 0 1px 0 rgba(220,252,231,0.55), inset 0 -1px 0 rgba(5,46,22,0.62), 0 0 16px rgba(74,222,128,0.95), 0 0 34px rgba(34,197,94,0.82)';
                                button.style.filter = 'brightness(1.24) saturate(1.2)';
                            } else {
                                button.style.borderColor = 'rgba(203,213,225,0.92)';
                                button.style.background = 'linear-gradient(165deg, rgba(148,163,184,0.5) 0%, rgba(71,85,105,0.82) 45%, rgba(30,41,59,0.94) 100%)';
                                button.style.color = '#f8fafc';
                                button.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -1px 0 rgba(15,23,42,0.55), 0 6px 12px rgba(2,6,23,0.45)';
                                button.style.filter = 'brightness(1) saturate(1)';
                            }
                        });
                    }

                    function selectSlotFromGallery(slotId) {
                        activeSlotSelectionId = slotId || '';
                        const slotInput = document.getElementById('slotSelectionId');
                        if (slotInput) slotInput.value = activeSlotSelectionId;
                        updateSlotGalleryButtons();
                    }

                    function isImagePayload(payload = {}) {
                        return String(payload.mediaType || '').trim() === 'image';
                    }

                    function assignToSlot(payload = {}, slotId = '') {
                        if (!slotId || !window.opener || !isImagePayload(payload)) return false;
                        const sourceIndex = Number(payload.sourceIndex);
                        if (!Number.isInteger(sourceIndex) || sourceIndex < 0) return false;
                        window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF', id: '${F}', slotId, index: sourceIndex, mediaType: payload.mediaType || 'image' }, '*');
                        activeSlotSelectionId = '';
                        const slotInput = document.getElementById('slotSelectionId');
                        if (slotInput) slotInput.value = '';
                        updateSlotGalleryButtons();
                        return true;
                    }

                    function tryAssignGalleryCardToActiveSlot(card) {
                        if (!card || !activeSlotSelectionId) return false;
                        const payload = {
                            sourceIndex: Number(card.dataset.sourceIndex),
                            mediaType: card.dataset.mediaType || 'image',
                            url: card.dataset.url || '',
                            compatibleSlots: card.dataset.compatibleSlots || ''
                        };
                        return assignToSlot(payload, activeSlotSelectionId);
                    }

                    function resetAddMediaModalFields() {
                        const urlInput = document.getElementById('nuevaFotoUrl');
                        const localInput = document.getElementById('nuevoArchivoLocal');
                        const labelInput = document.getElementById('nuevaFotoEtiqueta');
                        const authorInput = document.getElementById('nuevaFotoAutor');
                        const mediaTypeInput = document.getElementById('nuevoArchivoTipo');
                        const slotInput = document.getElementById('slotSelectionId');
                        if (urlInput) urlInput.value = '';
                        if (localInput) localInput.value = '';
                        if (labelInput) labelInput.value = '${XJ[0]}';
                        if (authorInput) authorInput.value = '';
                        if (mediaTypeInput) mediaTypeInput.value = 'image';
                        if (slotInput) slotInput.value = '';
                        const galleryHint = document.getElementById('slotGalleryHint');
                        if (galleryHint) galleryHint.style.display = 'none';
                        activeSlotSelectionId = '';
                        updateSlotGalleryButtons();
                    }

                    function addMediaFromModal() {
                        const urlInput = document.getElementById('nuevaFotoUrl');
                        const localInput = document.getElementById('nuevoArchivoLocal');
                        const labelInput = document.getElementById('nuevaFotoEtiqueta');
                        const authorInput = document.getElementById('nuevaFotoAutor');
                        const mediaTypeInput = document.getElementById('nuevoArchivoTipo');
                        const normalizedUrl = (urlInput?.value || '').trim();
                        const selectedFiles = Array.from(localInput?.files || []);
                        const mediaType = mediaTypeInput?.value || 'image';
                        const label = labelInput?.value || '${XJ[0]}';
                        const autor = (authorInput?.value || '').trim();
                        const slotSelectionId = activeSlotSelectionId || document.getElementById('slotSelectionId')?.value || '';

                        const postMedia = (finalUrl, finalType, canAssignSlot = true) => {
                            if (!finalUrl) return;
                            window.opener.postMessage({ type: 'ADD_IMAGE', url: finalUrl, label, autor, mediaType: finalType, id: '${F}' }, '*');
                            if (slotSelectionId && canAssignSlot) {
                                window.opener.postMessage({ type: 'SET_BATTLE_PHOTO_PREF_BY_URL', id: '${F}', slotId: slotSelectionId, url: finalUrl, mediaType: finalType, label }, '*');
                            }
                        };

                        if (selectedFiles.length) {
                            const invalidFile = selectedFiles.find((file) => !isAllowedFileType(file));
                            if (invalidFile) {
                                alert('Uno o más archivos no son válidos. Usá imagen o video.');
                                return;
                            }
                            const oversizedFile = selectedFiles.find((file) => Number(file?.size || 0) > MAX_LOCAL_MEDIA_BYTES);
                            if (oversizedFile) {
                                alert('El archivo "' + (oversizedFile.name || 'seleccionado') + '" pesa más de 9 MB. Comprimilo o usá una URL para que Firebase pueda guardarlo correctamente.');
                                return;
                            }
                            const readFileAsDataUrl = (file) => new Promise((resolve, reject) => {
                                const reader = new FileReader();
                                reader.onload = () => resolve({
                                    url: String(reader.result || ''),
                                    type: file.type && file.type.startsWith('video/') ? 'video' : 'image'
                                });
                                reader.onerror = () => reject(new Error('No se pudo leer uno de los archivos seleccionados.'));
                                reader.readAsDataURL(file);
                            });

                            Promise.all(selectedFiles.map(readFileAsDataUrl))
                                .then((filesData) => {
                                    filesData.forEach((fileData, index) => {
                                        postMedia(fileData.url, fileData.type, index === 0);
                                    });
                                    document.getElementById('miModal').style.display = 'none';
                                    resetAddMediaModalFields();
                                })
                                .catch((error) => {
                                    alert(error.message || 'No se pudo leer el archivo seleccionado.');
                                });
                            return;
                        }

                        postMedia(normalizedUrl, mediaType);
                        document.getElementById('miModal').style.display = 'none';
                        resetAddMediaModalFields();
                    }

                    galleryGrid?.addEventListener('click', (event) => {
                        const card = event.target.closest('.gallery-card');
                        if (!card) return;
                        const assigned = tryAssignGalleryCardToActiveSlot(card);
                        if (assigned) {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            event.stopPropagation();
                            return;
                        }
                    });
                    galleryGrid?.addEventListener('dragstart', (event) => {
                        const card = event.target.closest('.gallery-card');
                        if (!card) return;
                        const payload = {
                            sourceIndex: Number(card.dataset.sourceIndex),
                            mediaType: card.dataset.mediaType || 'image',
                            url: card.dataset.url || '',
                            compatibleSlots: card.dataset.compatibleSlots || ''
                        };
                        if (!isImagePayload(payload)) return;
                        event.dataTransfer.effectAllowed = 'copy';
                        event.dataTransfer.setData(DND_PAYLOAD_TYPE, JSON.stringify(payload));
                        event.dataTransfer.setData('text/plain', payload.url || '');
                    });
                    galleryGrid?.addEventListener('pointerdown', (event) => {
                        const card = event.target.closest('.gallery-card');
                        if (!card || card.dataset.mediaType !== 'image') return;
                        clearTimeout(longPressTimer);
                        touchPayload = {
                            sourceIndex: Number(card.dataset.sourceIndex),
                            mediaType: card.dataset.mediaType || 'image',
                            url: card.dataset.url || '',
                            compatibleSlots: card.dataset.compatibleSlots || ''
                        };
                        longPressTimer = setTimeout(() => {
                            card.classList.add('ring-2', 'ring-cyan-300');
                        }, LONG_PRESS_MS);
                    });
                    galleryGrid?.addEventListener('pointerup', (event) => {
                        clearTimeout(longPressTimer);
                        const card = event.target.closest('.gallery-card');
                        if (card) card.classList.remove('ring-2', 'ring-cyan-300');
                        if (!touchPayload) return;
                        const slotEl = document.elementFromPoint(event.clientX, event.clientY)?.closest('.gallery-slot-card[data-slot-id]');
                        if (slotEl && slotEl.dataset.slotId && slotEl.dataset.slotId !== 'perfil') {
                            assignToSlot(touchPayload, slotEl.dataset.slotId);
                        }
                        touchPayload = null;
                    });
                    galleryGrid?.addEventListener('pointercancel', () => {
                        clearTimeout(longPressTimer);
                        touchPayload = null;
                    });
                    document.querySelectorAll('.gallery-slot-card').forEach((slotCard) => {
                        const slotId = slotCard.dataset.slotId || '';
                        if (!slotId || slotId === 'perfil') return;
                        slotCard.addEventListener('dragover', (event) => {
                            let payload = null;
                            try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                            if (!isImagePayload(payload)) return;
                            event.preventDefault();
                            slotCard.style.filter = 'brightness(1.1)';
                            slotCard.style.outline = '2px solid rgba(34,211,238,0.8)';
                        });
                        slotCard.addEventListener('dragleave', () => {
                            slotCard.style.filter = '';
                            slotCard.style.outline = '';
                        });
                        slotCard.addEventListener('drop', (event) => {
                            event.preventDefault();
                            slotCard.style.filter = '';
                            slotCard.style.outline = '';
                            let payload = null;
                            try { payload = JSON.parse(event.dataTransfer.getData(DND_PAYLOAD_TYPE) || '{}'); } catch {}
                            assignToSlot(payload, slotId);
                        });
                    });

                    function getNextViewerIndex() {
                        if (viewerSlides.length <= 1) return 0;
                        if (!viewerRandom) return (currentViewerIndex + 1) % viewerSlides.length;
                        const candidates = viewerSlides.map((_, idx) => idx).filter((idx) => idx !== currentViewerIndex);
                        return candidates[Math.floor(Math.random() * candidates.length)];
                    }

                    function clearViewerAutoplayTimer() {
                        if (viewerAutoplayTimeout) {
                            clearTimeout(viewerAutoplayTimeout);
                            viewerAutoplayTimeout = null;
                        }
                    }

                    function setViewerAutoplayState(nextState) {
                        viewerAutoplay = !!nextState;
                        if (viewerPlayToggleButton) {
                            viewerPlayToggleButton.textContent = viewerAutoplay ? 'Pause' : 'Play';
                        }
                        scheduleViewerAutoplay();
                    }

                    function setViewerRandomState(nextState) {
                        viewerRandom = !!nextState;
                        if (viewerRandomToggleButton) {
                            viewerRandomToggleButton.textContent = viewerRandom ? 'Random On' : 'Random Off';
                            viewerRandomToggleButton.classList.toggle('random-active', viewerRandom);
                        }
                    }

                    function preloadViewerAround(index) {
                        if (!viewerSlides.length) return;
                        for (let offset = -VIEWER_PRELOAD_RADIUS; offset <= VIEWER_PRELOAD_RADIUS; offset += 1) {
                            const targetIndex = (index + offset + viewerSlides.length) % viewerSlides.length;
                            const slide = viewerSlides[targetIndex];
                            const nearVideo = slide ? slide.querySelector('video') : null;
                            if (nearVideo && nearVideo.preload !== 'auto') {
                                nearVideo.preload = 'auto';
                                nearVideo.load();
                            }
                        }
                    }

                    function pauseAndResetInactiveVideos(activeIndex) {
                        viewerSlides.forEach((slide, slideIndex) => {
                            if (slideIndex === activeIndex) return;
                            const video = slide.querySelector('video');
                            if (!video) return;
                            video.pause();
                            if (!video.dataset.manuallyPaused) {
                                video.currentTime = 0;
                            }
                        });
                    }

                    function recoverViewerPlayback(reason = 'unknown') {
                        if (viewerRecoveryInProgress) return;
                        viewerRecoveryInProgress = true;
                        setTimeout(() => {
                            viewerRecoveryInProgress = false;
                            if (viewerSlides.length > 1 && viewer.classList.contains('open')) {
                                renderViewerSlide(getNextViewerIndex());
                            } else {
                                clearViewerAutoplayTimer();
                                viewerState = VIEWER_STATES.IDLE;
                            }
                        }, VIEWER_RETRY_DELAY_MS);
                    }

                    function scheduleViewerAutoplay() {
                        clearViewerAutoplayTimer();
                        if (!viewerAutoplay || !viewer.classList.contains('open') || viewerSlides.length <= 1) return;
                        if (viewerState === VIEWER_STATES.TRANSITIONING) return;
                        if (viewerState === VIEWER_STATES.PLAYING_VIDEO) {
                            viewerAutoplayTimeout = setTimeout(() => {
                                recoverViewerPlayback('video-timeout');
                            }, VIEWER_VIDEO_FALLBACK_TIMEOUT_MS);
                            return;
                        }
                        viewerAutoplayTimeout = setTimeout(function() {
                            renderViewerSlide(getNextViewerIndex());
                        }, VIEWER_IMAGE_TIMEOUT_MS);
                    }

                    function syncViewerButtons() {
                        const disableNavigation = viewerSlides.length <= 1;
                        if (viewerNextButton) viewerNextButton.disabled = disableNavigation;
                    }

                    function renderViewerSlide(index) {
                        if (!viewerSlides.length) return;
                        const renderToken = ++viewerTransitionToken;
                        viewerState = VIEWER_STATES.TRANSITIONING;
                        currentViewerIndex = Math.max(0, Math.min(index, viewerSlides.length - 1));
                        pauseAndResetInactiveVideos(currentViewerIndex);
                        viewerSlides.forEach(function(slide, slideIndex) {
                            slide.classList.toggle('active', slideIndex === currentViewerIndex);
                        });
                        const activeSlide = viewerSlides[currentViewerIndex];
                        const activeImage = activeSlide ? activeSlide.querySelector('img') : null;
                        const activeVideo = activeSlide ? activeSlide.querySelector('video') : null;
                        preloadViewerAround(currentViewerIndex);
                        if (activeVideo) {
                            activeVideo.onpause = function() {
                                if (!viewerAutoplay) activeVideo.dataset.manuallyPaused = '1';
                            };
                            activeVideo.onplay = function() {
                                activeVideo.dataset.manuallyPaused = '';
                            };
                            if (viewerAutoplay) {
                                if (!activeVideo.dataset.manuallyPaused) {
                                    activeVideo.currentTime = 0;
                                }
                                activeVideo.play().catch(function() {
                                    recoverViewerPlayback('play-error');
                                });
                            }
                            viewerState = VIEWER_STATES.PLAYING_VIDEO;
                        }
                        if (activeImage) {
                            activeImage.onerror = function() {
                                recoverViewerPlayback('image-error');
                            };
                            viewerState = VIEWER_STATES.SHOWING_IMAGE;
                        }
                        if (activeVideo) {
                            activeVideo.onerror = function() {
                                recoverViewerPlayback('video-error');
                            };
                            activeVideo.onended = function() {
                                if (viewerAutoplay && viewerSlides.length > 1) {
                                    renderViewerSlide(getNextViewerIndex());
                                }
                            };
                        }
                        requestAnimationFrame(() => {
                            if (renderToken !== viewerTransitionToken) return;
                            if (!activeVideo && !activeImage) viewerState = VIEWER_STATES.IDLE;
                            scheduleViewerAutoplay();
                        });
                        syncViewerButtons();
                    }

                    function resetViewerStageTransform(withTransition = false) {
                        if (!viewerStage) return;
                        viewerStage.style.transition = withTransition ? 'transform 160ms ease-out' : '';
                        viewerStage.style.transform = 'translateX(0px)';
                        if (withTransition) {
                            window.setTimeout(function() {
                                if (viewerStage) viewerStage.style.transition = '';
                            }, 180);
                        }
                    }

                    function updateViewerSwipeFeedback(deltaX) {
                        if (!viewerStage) return;
                        const clampedDelta = Math.max(-SWIPE_FEEDBACK_MAX_TRANSLATE, Math.min(SWIPE_FEEDBACK_MAX_TRANSLATE, deltaX * 0.28));
                        viewerStage.style.transition = '';
                        viewerStage.style.transform = 'translateX(' + clampedDelta + 'px)';
                    }

                    function targetHasDirectMediaControls(target) {
                        if (!target || typeof target.closest !== 'function') return false;
                        return Boolean(target.closest('iframe, video'));
                    }

                    function onViewerStagePointerDown(event) {
                        if (!viewer.classList.contains('open') || viewerSlides.length <= 1) return;
                        const blockedByMediaControl = targetHasDirectMediaControls(event.target);
                        viewerSwipeState = {
                            active: true,
                            pointerId: event.pointerId,
                            startX: event.clientX,
                            startY: event.clientY,
                            currentX: event.clientX,
                            startTime: performance.now(),
                            isHorizontal: false,
                            isVertical: false,
                            blockedByMediaControl
                        };
                        if (blockedByMediaControl) return;
                        if (viewerStage?.setPointerCapture) {
                            try { viewerStage.setPointerCapture(event.pointerId); } catch {}
                        }
                    }

                    function onViewerStagePointerMove(event) {
                        if (!viewerSwipeState.active || viewerSwipeState.pointerId !== event.pointerId || viewerSwipeState.blockedByMediaControl) return;
                        const deltaX = event.clientX - viewerSwipeState.startX;
                        const deltaY = event.clientY - viewerSwipeState.startY;
                        viewerSwipeState.currentX = event.clientX;

                        if (!viewerSwipeState.isHorizontal && !viewerSwipeState.isVertical) {
                            if (Math.abs(deltaY) > Math.abs(deltaX) * SWIPE_VERTICAL_LOCK_RATIO) {
                                viewerSwipeState.isVertical = true;
                                resetViewerStageTransform(false);
                                return;
                            }
                            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                                viewerSwipeState.isHorizontal = true;
                            }
                        }

                        if (viewerSwipeState.isHorizontal) {
                            event.preventDefault();
                            updateViewerSwipeFeedback(deltaX);
                        }
                    }

                    function onViewerStagePointerEnd(event) {
                        if (!viewerSwipeState.active || viewerSwipeState.pointerId !== event.pointerId) return;
                        const elapsedMs = Math.max(1, performance.now() - viewerSwipeState.startTime);
                        const deltaX = viewerSwipeState.currentX - viewerSwipeState.startX;
                        const velocityX = Math.abs(deltaX) / elapsedMs;
                        const shouldNavigate = !viewerSwipeState.blockedByMediaControl
                            && viewerSwipeState.isHorizontal
                            && !viewerSwipeState.isVertical
                            && (Math.abs(deltaX) >= SWIPE_DISTANCE_THRESHOLD || velocityX >= SWIPE_VELOCITY_THRESHOLD);

                        resetViewerStageTransform(true);
                        if (shouldNavigate) {
                            if (deltaX < 0) showNextViewerPhoto();
                            else showPreviousViewerPhoto();
                        }

                        if (viewerStage?.releasePointerCapture) {
                            try { viewerStage.releasePointerCapture(event.pointerId); } catch {}
                        }
                        viewerSwipeState.active = false;
                    }

                    function openFullscreenViewer(index) {
                        if (!viewerSlides.length) return;
                        const parsedIndex = Number(index);
                        if (!Number.isInteger(parsedIndex) || parsedIndex < 0 || parsedIndex >= viewerSlides.length) return;
                        viewer.classList.add('open');
                        document.body.style.overflow = 'hidden';
                        viewerState = VIEWER_STATES.TRANSITIONING;
                        renderViewerSlide(parsedIndex);
                    }
                    function closeFullscreenViewer() {
                        viewer.classList.remove('open');
                        document.body.style.overflow = '';
                        clearViewerAutoplayTimer();
                        viewerState = VIEWER_STATES.IDLE;
                        pauseAndResetInactiveVideos(-1);
                    }
                    function showNextViewerPhoto(event) {
                        if (event) event.stopPropagation();
                        if (viewerSlides.length <= 1) return;
                        renderViewerSlide((currentViewerIndex + 1) % viewerSlides.length);
                    }
                    function showPreviousViewerPhoto(event) {
                        if (event) event.stopPropagation();
                        if (viewerSlides.length <= 1) return;
                        renderViewerSlide((currentViewerIndex - 1 + viewerSlides.length) % viewerSlides.length);
                    }
                    function toggleViewerAutoplay(event) {
                        if (event) event.stopPropagation();
                        setViewerAutoplayState(!viewerAutoplay);
                    }
                    function toggleViewerRandom(event) {
                        if (event) event.stopPropagation();
                        setViewerRandomState(!viewerRandom);
                    }

                    function startFullscreenPlaybackFromModal(event) {
                        if (event) event.stopPropagation();
                        const modal = document.getElementById('miModal');
                        if (modal) modal.style.display = 'none';
                        if (!viewer.classList.contains('open')) {
                            openFullscreenViewer(currentViewerIndex || 0);
                        }
                        setViewerAutoplayState(true);
                    }
                    if (galleryGrid) {
                        galleryGrid.addEventListener('click', function(event) {
                            const deleteButton = event.target.closest('.gallery-delete');
                            if (deleteButton) {
                                event.preventDefault();
                                event.stopPropagation();
                                window.opener.postMessage({
                                    type: 'DELETE_IMAGE',
                                    index: Number(deleteButton.dataset.deleteIndex),
                                    mediaType: deleteButton.dataset.deleteMediaType,
                                    id: '${F}'
                                }, '*');
                                return;
                            }

                            const card = event.target.closest('.gallery-card');
                            if (!card) return;
                            if (activeSlotSelectionId) {
                                if ((card.dataset.mediaType || 'image') !== 'image') return;
                                const assigned = tryAssignGalleryCardToActiveSlot(card);
                                if (assigned) return;
                            }
                            event.preventDefault();
                            openFullscreenViewer(card.dataset.galleryIndex);
                        });
                    }
                    viewer.addEventListener('click', function(event) {
                        if (event.target === viewer) {
                            closeFullscreenViewer();
                        }
                    });
                    viewerStage?.addEventListener('pointerdown', onViewerStagePointerDown, { passive: true });
                    viewerStage?.addEventListener('pointermove', onViewerStagePointerMove, { passive: false });
                    viewerStage?.addEventListener('pointerup', onViewerStagePointerEnd);
                    viewerStage?.addEventListener('pointercancel', onViewerStagePointerEnd);
                    window.addEventListener('keydown', function(event) {
                        if (!viewer.classList.contains('open')) return;

                        if (event.key === 'Escape') {
                            event.preventDefault();
                            closeFullscreenViewer();
                            return;
                        }

                        if (event.key === 'ArrowRight') {
                            event.preventDefault();
                            showNextViewerPhoto();
                        }

                        if (event.key === 'ArrowLeft') {
                            event.preventDefault();
                            showPreviousViewerPhoto();
                        }
                    });
                    setViewerAutoplayState(false);
                    renderViewerSlide(0);
                </script>
            </body>
            </html>
        `);_.document.close()},L1=()=>{const[_,O]=React.useState(null),R=CJ(null),T=CJ(null),[F,v]=D([]),c=CJ(""),jJ={CANTANTE:{color:"#0ea5e9",sombra:"rgba(14,165,233,0.8)"},NSFW:{color:"#ef4444",sombra:"rgba(239,68,68,0.8)"},ACTRIZ:{color:"#22c55e",sombra:"rgba(34,197,94,0.8)"},MODELO:{color:"#f97316",sombra:"rgba(249,115,22,0.8)"},BAILARINA:{color:"#a855f7",sombra:"rgba(168,85,247,0.8)"},INFLUENCER:{color:"#ec4899",sombra:"rgba(236,72,153,0.8)"},PERIODISTA:{color:"#facc15",sombra:"rgba(250,204,21,0.8)"},ATLETA:{color:"#78350f",sombra:"rgba(120,53,15,0.8)"},OTRO:{color:"#ffffff",sombra:"rgba(255,255,255,0.8)"},DEFAULT:{color:"#334155",sombra:"transparent"}},JJ=(J="")=>{const X=String(J||"").normalize("NFD").replace(/[̀-ͯ]/g,"").trim().toUpperCase();return jJ[X]||jJ.DEFAULT},[k,A]=D(TZ),[V,I]=D("EXPLORAR"),[N,s]=D(null),[S,EJ]=D(null),[d,rJ]=D(""),[$J,GJ]=D({}),[FJ,gJ]=D({}),[zZ,NZ]=D(!1),[XY,MZ]=D(eX[0]||""),[PQ,OQ]=D(null),[KZ,wZ]=D(!1),[YY,hJ]=D(!1),[ZY,bQ]=D(!1),[t,LQ]=D(null),[kZ,EQ]=D(null),[UJ,FQ]=D(null),[GZ,$Y]=D(!1),[HY,vQ]=D(""),[QJ,UQ]=React.useState(null),[LX,IQ]=D(!1),[jY,SZ]=D({x:0,y:0}),[YJ,qY]=D("promedio"),[yJ,EX]=D("desc"),[FX,xZ]=D(!1),[VJ,VQ]=D({isOpen:!1,profile:null,category:null}),[UX,gQ]=D({isOpen:!1,profile:null}),[SJ,VX]=D("INICIAL"),[g,PZ]=D("GENERAL"),[RJ,o]=D(null),[hQ,DQ]=D(null),[CQ,DX]=D([]),[eJ,_Y]=D([]),[AJ,RQ]=D(!1),[xJ,CX]=D(!1),[zJ,WY]=D(!1),[RX,bZ]=D(5),[OY,LY]=D(20),[EY,FY]=D(!1),[BJ,vZ]=D(!0),[UY,JQ]=D(!1),[VY,yQ]=D(""),[DY,mQ]=D(""),[CY,mJ]=D(""),[RY,BY]=D(!1),[BX,TY]=D(""),[TX,AY]=D("url"),[zY,NY]=D(""),[AX,MY]=D(null),[KY,IZ]=D(XJ[0]),[wY,kY]=D(""),[GY,uQ]=D(""),[PJ,gZ]=D(""),[QQ,hZ]=D([]),[SY,xY]=D(""),[fQ,PY]=D("url"),[bY,vY]=D(""),[IY,gY]=D(null),[hY,uJ]=D(""),[zX,yZ]=D(!1),[NX,mZ]=D(""),[MX,uZ]=D(""),[cQ,fJ]=D(""),[fZ,cZ]=D(!1),[KX,wX]=D(!1),[yY,kX]=D({}),[GX,mY]=D({}),[sZ,sQ]=D({}),[dZ,uY]=D({}),[XQ,nZ]=D(!1),[dQ,pZ]=D(!1),[iZ,BQ]=D(""),cJ=CJ(null),nQ=CJ(null),SX=CJ(null),TQ=CJ(null),AQ=CJ(null),pQ=CJ(!1),iQ=CJ(null),lQ=CJ(!1),fY=()=>({label:"",emoji:"\uD83D\uDCC1",coverImg:"",reglas:{nacionalidades:[],profesiones:[],ciudades:[],edadMin:"",edadMax:"",caracteristica:"Rostro",operador:"Superior a",umbral:""}}),tQ=()=>({nombre:"",nacionalidad:"",ciudad:"",profesion:"",fechaNacimiento:"",estaturaCm:"",fotos:[],galeria:{fotos:[],gifs:[],videos:[]},batallaFotosPreferidas:tX(),puntuaciones:SQ()}),[x,i]=D(tQ);n(()=>{if(!S){if(d)rJ("");return}if(S==="GENERAL"&&d!=="all")rJ("all")},[S,d]);const xX=(J={})=>{const X=tQ(),Y=J&&typeof J==="object"?J:{},Z=Y?.puntuaciones&&typeof Y.puntuaciones==="object"?{...X.puntuaciones,...Y.puntuaciones}:X.puntuaciones;return{...Y,...X,nombre:typeof Y.nombre==="string"?Y.nombre:"",nacionalidad:typeof Y.nacionalidad==="string"?Y.nacionalidad:"",ciudad:typeof Y.ciudad==="string"?Y.ciudad:"",profesion:typeof Y.profesion==="string"?Y.profesion:"",fechaNacimiento:typeof Y.fechaNacimiento==="string"?Y.fechaNacimiento:"",estaturaCm:Y.estaturaCm===void 0||Y.estaturaCm===null?"":Y.estaturaCm,fotos:Array.isArray(Y.fotos)?Y.fotos:[],galeria:{fotos:Array.isArray(Y?.galeria?.fotos)?Y.galeria.fotos:[],gifs:Array.isArray(Y?.galeria?.gifs)?Y.galeria.gifs:[],videos:Array.isArray(Y?.galeria?.videos)?Y.galeria.videos:[]},batallaFotosPreferidas:WJ(Y?.batallaFotosPreferidas),puntuaciones:Z}},oQ=(J={})=>{if(J?.isAnonymousGallery||J?.firebaseId===KJ)return;i(xX(J));LQ(J.firebaseId||J.id||null);hJ(!0)},PX=(J={})=>{const X=J?.firebaseId||J?.id||"",Y=R.current,Z=Y&&!Y.closed?Y:window.open("","_blank");if(!Z)return null;R.current=Z;c.current=X;AZ({targetWindow:Z,profileName:J?.nombre||"",profession:J?.profesion||"",photos:[...(J?.galeria?.fotos||[]).map(($,j)=>({...e($,"image"),sourceTag:"fotos",sourceIndex:j})),...(J?.galeria?.videos||[]).map(($,j)=>({...e($,"video"),sourceTag:"videos",sourceIndex:j}))],editingId:X,battlePhotoPrefs:J?.batallaFotosPreferidas||J?.galeria?.battlePhotoPreferences||{},profilePhotoUrl:J?.fotos?.[0]||""});Z.focus();return Z},lZ=(J={})=>{if(!(J?.firebaseId||J?.nombre))return;PX(J);fJ("");BQ("")},cY=(J="")=>{if(V==="anonimo")return;const X=String(J||"").trim();LQ(null);i({...tQ(),profesion:X});hJ(!0)},aQ=m(()=>{const X=[{key:"nombre",label:"Nombre",value:x?.nombre},{key:"fotos.0",label:"Foto principal",value:x?.fotos?.[0]},{key:"profesion",label:"Profesión",value:x?.profesion},{key:"nacionalidad",label:"Nacionalidad",value:x?.nacionalidad},{key:"ciudad",label:"Ciudad",value:x?.ciudad},{key:"fechaNacimiento",label:"Fecha de nacimiento",value:x?.fechaNacimiento},{key:"estaturaCm",label:"Estatura",value:x?.estaturaCm}].map((Y)=>{const Z=typeof Y.value==="string"?Y.value.trim():Y.value,$=!(Z===""||Z===void 0||Z===null),j=Y.key==="fotos.0"?$?"SI":"NO":$?String(Z):"Sin completar";return{...Y,isComplete:$,preview:j}});return{completed:X.filter((Y)=>Y.isComplete),missing:X.filter((Y)=>!Y.isComplete)}},[x]),F1=async({profileId:J,url:X,tag:Y="fotos",label:Z="",type:$="image",autor:j=""})=>{const E=(X||"").trim(),q=XJ.includes(Z)?Z:"",W=tJ(E,$);if(!J||!E)return[];const H=M.ref(`perfiles/${J}/galeria/${Y}`),L={url:E,label:q,type:W,autor:oX(j)},U=await H.transaction((z)=>{return[...Array.isArray(z)?z:[],L]}),C=Array.isArray(U?.snapshot?.val())?U.snapshot.val():[L];if(J===t)i((z)=>({...z,galeria:{...z.galeria||{fotos:[],gifs:[],videos:[]},[Y]:C}}));return C},tZ=async({profileId:J,sourceTag:X,sourceIndex:Y,label:Z})=>{if(!J||!X||!Number.isInteger(Y))return;const $=XJ.includes(Z)?Z:"",j=M.ref(`perfiles/${J}/galeria/${X}`),E=await j.once("value"),q=Array.isArray(E.val())?E.val():[];if(!q[Y])return;const W=[...q],H=e(W[Y],X==="videos"?"video":"image");W[Y]={...H,label:$};await j.set(W);if(J===t)i((L)=>({...L,galeria:{...L.galeria||{fotos:[],gifs:[],videos:[]},[X]:W}}))},sY=async({profileId:J,sourceTag:X,sourceIndex:Y,url:Z})=>{if(!J||!X||!Number.isInteger(Y))return;const $=(Z||"").trim();if(!$)return;const j=M.ref(`perfiles/${J}/galeria/${X}`),E=await j.once("value"),q=Array.isArray(E.val())?E.val():[];if(!q[Y])return;const W=[...q],H=X==="videos"?"video":"image",L=e(W[Y],H);W[Y]={...L,url:$,type:tJ($,H)};await j.set(W);if(J===t)i((U)=>({...U,galeria:{...U.galeria||{fotos:[],gifs:[],videos:[]},[X]:W}}))},oZ=async({profileId:J,sourceTag:X,sourceIndex:Y})=>{if(!J||!X||!Number.isInteger(Y))return;const Z=M.ref(`perfiles/${J}/galeria/${X}`),$=await Z.once("value"),j=Array.isArray($.val())?$.val():[],E=j[Y];if(!E)return;const q=j.filter((H,L)=>L!==Y);await Z.set(q);const W=e(E,X==="videos"?"video":"image").url;if(W){const H=M.ref(`perfiles/${J}/batallaFotosPreferidas`),L=await H.once("value"),C={...WJ(L.val())};let z=!1;Object.keys(C).forEach((B)=>{if(C[B]===W){C[B]="";z=!0}});if(z)await H.set(C)}if(J===t)i((H)=>({...H,galeria:{...H.galeria||{fotos:[],gifs:[],videos:[]},[X]:q},batallaFotosPreferidas:(()=>{const L=WJ(H.batallaFotosPreferidas);if(!W)return L;const U={...L};Object.keys(U).forEach((C)=>{if(U[C]===W)U[C]=""});return U})()}))},aZ=9437184,rZ=(J,X=["image/","video/"])=>{if(!J)return!1;const Y=String(J.type||"").toLowerCase();return X.some((Z)=>Y.startsWith(Z))},bX=(J)=>new Promise((X,Y)=>{if(J&&Number(J.size||0)>aZ){Y(new Error("El archivo pesa más de 9 MB. Comprimilo o usá una URL para guardarlo en la galería."));return}const Z=new FileReader;Z.onload=()=>X(String(Z.result||""));Z.onerror=()=>Y(new Error("No se pudo leer el archivo."));Z.readAsDataURL(J)}),dY=(J,X)=>{const Y=String(X||"").trim(),Z=Array.isArray(J?.galeria?.fotos)?J.galeria.fotos:[];if(!Y)return{...J,fotos:[""]};const j=Z.some((E)=>e(E,"image").url===Y)?Z:[...Z,{url:Y,label:"C",type:"image"}];return{...J,fotos:[Y],galeria:{...J.galeria||{},fotos:j}}},eZ=async(J)=>{const X=J.target.files?.[0];if(!X)return;try{const Y=await bX(X);i((Z)=>dY(Z,Y))}catch(Y){console.error("Error al cargar foto de perfil local:",Y)}finally{J.target.value=""}},J0=async({url:J,label:X,autor:Y="",forcedTag:Z=""})=>{const $=String(J||"").trim();if(!$)throw new Error("Ingresá una URL o seleccioná un archivo.");const j=XJ.includes(X)?X:"",E=tJ($);if(!(E==="image"||UZ.test($)||Boolean(jQ($))))throw new Error("Formato no válido. Usá imagen, video archivo o URL de YouTube/Vimeo.");const W=Z||(E==="video"?"videos":"fotos"),H=M.ref(`${GQ}/${W}`),L={url:$,label:j,type:E,autor:String(Y||"").trim()};await H.transaction((U)=>{return[...Array.isArray(U)?U:[],L]})},Q0=async(J="")=>{uQ("");try{let X=String(zY||"").trim();if(TX==="file"){if(!AX)throw new Error("Seleccioná un archivo local.");if(!rZ(AX,PJ==="imagen"?["image/"]:["image/","video/"]))throw new Error("Archivo no válido. Usá imagen o video según la sección elegida.");X=await bX(AX)}await J0({url:X,label:KY,autor:wY,forcedTag:J});NY("");MY(null);kY("");AY("url")}catch(X){uQ(X?.message||"No se pudo guardar en galería anónima.")}},X0=async()=>{const J=String(SY||"").trim();uJ("");if(!J){uJ("Completá el nombre del audio.");return}try{let X=String(bY||"").trim();if(fQ==="file"){if(!IY){uJ("Seleccioná un archivo de audio.");return}X=await bX(IY)}else if(!X){uJ("Completá la URL del audio.");return}if(fQ==="url"&&!t0.test(X)){uJ("La URL debe apuntar a un archivo de audio válido.");return}const Y=M.ref(`${GQ}/audios`),Z=await Y.once("value"),j=[...Array.isArray(Z.val())?Z.val():[],{nombre:J,url:X}];await Y.set(j);xY("");vY("");gY(null);PY("url")}catch(X){uJ("No se pudo guardar el audio en Firebase.")}},U1=async(J,X)=>{X.stopPropagation();if(confirm("¿Estás seguro de que querés eliminar esto, corazón?"))try{await M.collection("galeria").doc(J).delete()}catch(Y){console.error("Error al borrar de Firebase:",Y)}},[K,HJ]=D(fY()),vX=()=>HJ(fY());n(()=>{if(window.lucide)window.lucide.createIcons()},[V,YY,ZY,F,QJ,k]);n(()=>{if(R.current&&!R.current.closed&&t)AZ({targetWindow:R.current,profileName:x.nombre,profession:x.profesion,photos:[...(x.galeria?.fotos||[]).map((J,X)=>({...e(J,"image"),sourceTag:"fotos",sourceIndex:X})),...(x.galeria?.videos||[]).map((J,X)=>({...e(J,"video"),sourceTag:"videos",sourceIndex:X}))],editingId:t,battlePhotoPrefs:x.batallaFotosPreferidas,profilePhotoUrl:x.fotos?.[0]||""})},[t,x.nombre,x.profesion,x.galeria?.fotos,x.galeria?.videos,x.batallaFotosPreferidas]);n(()=>{const J=R.current,X=c.current;if(!J||J.closed||!X||t===X)return;const Y=(F||[]).find((Z)=>(Z?.firebaseId||Z?.id||"")===X);if(Y)PX(Y)},[F,t]);n(()=>{const J=async(W)=>{if(W.data.type==="ADD_IMAGE"){const{url:H,id:L,label:U,mediaType:C,autor:z}=W.data,B=C==="video"?"videos":"fotos";if(!L)return;const G=L===KJ?M.ref(`${GQ}/${B}`):M.ref(`perfiles/${L}/galeria/${B}`),P=(H||"").trim();if(!P)return;const h={url:P,label:XJ.includes(U)?U:"",type:tJ(P,C),autor:oX(z)},u=await G.transaction((b)=>{return[...Array.isArray(b)?b:[],h]}),r=Array.isArray(u?.snapshot?.val())?u.snapshot.val():[h];i((b)=>({...b,galeria:{...b.galeria,[B]:r}}))}if(W.data.type==="DELETE_IMAGE"){const{index:H,id:L,mediaType:U}=W.data,C=U==="video"?"videos":"fotos";if(!L)return;const z=L===KJ?M.ref(`${GQ}/${C}`):M.ref(`perfiles/${L}/galeria/${C}`),G=(await z.once("value")).val()||[],P=G[H],h=G.filter((r,b)=>b!==H);await z.set(h);const u=e(P,U).url;if(u&&L!==KJ){const r=M.ref(`perfiles/${L}/batallaFotosPreferidas`),b=await r.once("value"),f={...WJ(b.val())};let TJ=!1;Object.keys(f).forEach((nJ)=>{if(f[nJ]===u){f[nJ]="";TJ=!0}});if(TJ)await r.set(f)}i((r)=>({...r,galeria:{...r.galeria,[C]:h},batallaFotosPreferidas:(()=>{const b=WJ(r.batallaFotosPreferidas);if(!u)return b;const l={...b};Object.keys(l).forEach((f)=>{if(l[f]===u)l[f]=""});return l})()}))}if(W.data.type==="SET_BATTLE_PHOTO_PREF"){const{id:H,slotId:L,index:U,mediaType:C}=W.data,z=_X(L);if(!H||H===KJ||!z||!Number.isInteger(U))return;const B=C==="video"?"videos":"fotos",h=(await M.ref(`perfiles/${H}/galeria/${B}`).once("value")).val()||[],u=e(h[U],C);if(!u.url||u.type!=="image")return;await M.ref(`perfiles/${H}/batallaFotosPreferidas/${L}`).set(u.url);i((b)=>({...b,batallaFotosPreferidas:{...WJ(b.batallaFotosPreferidas),[L]:u.url}}))}if(W.data.type==="SET_BATTLE_PHOTO_PREF_BY_URL"){const{id:H,slotId:L,url:U,mediaType:C,label:z}=W.data,B=_X(L),G=String(U||"").trim();if(!H||H===KJ||!B||!G)return;if(C==="video")return;await M.ref(`perfiles/${H}/batallaFotosPreferidas/${L}`).set(G);i((h)=>({...h,batallaFotosPreferidas:{...WJ(h.batallaFotosPreferidas),[L]:G}}))}if(W.data.type==="CLEAR_BATTLE_PHOTO_PREF"){const{id:H,slotId:L}=W.data,U=_X(L);if(!H||H===KJ||!U)return;await M.ref(`perfiles/${H}/batallaFotosPreferidas/${L}`).set("");i((z)=>({...z,batallaFotosPreferidas:{...WJ(z.batallaFotosPreferidas),[L]:""}}))}};window.addEventListener("message",J);const X=M.ref("perfiles"),Y=M.ref(GQ);let Z={},$={};const j=()=>{const W=Object.keys(Z||{}).map((U)=>({...xX(Z[U]),firebaseId:U})),H=Q1($||{}),L=Object.values(H.galeria||{}).some((U)=>Array.isArray(U)&&U.length>0);v(L?[...W,H]:W)};X.on("value",(W)=>{Z=W.val()||{};j()});Y.on("value",(W)=>{$=W.val()||{};const H=Array.isArray($?.audios)?$.audios.map((L)=>({nombre:String(L?.nombre||"").trim(),url:String(L?.url||"").trim()})).filter((L)=>L.nombre&&L.url):[];hZ(H);j()});A(TZ);const E=M.ref("arenaBattleState");E.on("value",(W)=>{GJ(W.val()||{})});const q=M.ref("arenaGlobalState");q.on("value",(W)=>{gJ(W.val()||{})});return()=>{window.removeEventListener("message",J);X.off();Y.off();E.off();q.off()}},[]);n(()=>{const J=QQ.find((Y)=>Y.url===NX),X=QQ.find((Y)=>Y.url===MX);[TQ.current,AQ.current].forEach((Y)=>{if(!Y)return;Y.pause();Y.currentTime=0});if(!zX)return;if(J&&TQ.current){TQ.current.src=J.url;TQ.current.play().catch(()=>{})}if(X&&AQ.current&&X.url!==J?.url){AQ.current.src=X.url;AQ.current.play().catch(()=>{})}},[zX,NX,MX,QQ]);const bJ=(J)=>{if(!J)return"?";const X=new Date,Y=new Date(J);let Z=X.getFullYear()-Y.getFullYear();if(X.getMonth()<Y.getMonth()||X.getMonth()===Y.getMonth()&&X.getDate()<Y.getDate())Z--;return Z},IX=(J={})=>{return{...SQ(),...J?.puntuaciones||{}}},sJ={Rostro:["Rostro","Ojos","Boca","Cabello"],Cuerpo:["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"],Actitud:["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]},gX=(J={},X=[])=>{if(!Array.isArray(X)||!X.length)return 0;const Y=IX(J);return X.reduce((Z,$)=>Z+(Number(Y[$])||0),0)/X.length},rQ=(J={})=>{return gX(J,sJ.Rostro)},eQ=(J={})=>{return gX(J,sJ.Cuerpo)},JX=(J={})=>{return gX(J,sJ.Actitud)},nY=(J={},X="")=>{if(X==="Rostro")return rQ(J);if(X==="Cuerpo")return eQ(J);if(X==="Actitud")return JX(J);return 0},qJ=(J={})=>{const X=Object.keys(sJ).map((Z)=>nY(J,Z));return(X.reduce((Z,$)=>Z+$,0)/X.length).toFixed(0)},QX=(J)=>{const X=[],Y=(J.nacionalidad||"").toLowerCase(),Z=(J.profesion||"").toLowerCase(),$=(J.ciudad||"").toLowerCase(),j=bJ(J.fechaNacimiento);k.forEach((E)=>{const q=E.reglas;let W=!0;if(q.nacionalidades?.length>0&&!q.nacionalidades.some((H)=>Y===H.toLowerCase()))W=!1;if(q.profesiones?.length>0&&!q.profesiones.some((H)=>Z===H.toLowerCase()))W=!1;if(q.ciudades?.length>0&&!q.ciudades.some((H)=>$===H.toLowerCase()))W=!1;if(q.edadMin&&(j==="?"||j<parseInt(q.edadMin)))W=!1;if(q.edadMax&&(j==="?"||j>parseInt(q.edadMax)))W=!1;if(q.caracteristica&&q.umbral){const H=IX(J)[q.caracteristica]||0,L=parseInt(q.umbral);if(q.operador==="Superior a"&&H<=L)W=!1;if(q.operador==="Inferior a"&&H>=L)W=!1}if(W)X.push(E.firebaseId)});return X},Y0=m(()=>["Todas",...new Set(F.map((J)=>J.nacionalidad).filter(Boolean))],[F]),V1=m(()=>["Todas",...new Set(F.map((J)=>J.profesion).filter(Boolean))],[F]),Z0=m(()=>["Todas",...new Set(F.map((J)=>J.ciudad).filter(Boolean))],[F]),pY=m(()=>{return(F||[]).reduce((J,X)=>{if(!X?.firebaseId)return J;J[X.firebaseId]=QX(X);return J},{})},[F,k]),YQ=m(()=>{return(F||[]).flatMap((J)=>{const X=X1(J);return[...Array.isArray(J?.galeria?.fotos)?J.galeria.fotos.map((Z,$)=>({item:Z,sourceTag:"fotos",sourceIndex:$,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.gifs)?J.galeria.gifs.map((Z,$)=>({item:Z,sourceTag:"gifs",sourceIndex:$,fallbackType:"image"})):[],...Array.isArray(J?.galeria?.videos)?J.galeria.videos.map((Z,$)=>({item:Z,sourceTag:"videos",sourceIndex:$,fallbackType:"video"})):[]].map(({item:Z,sourceTag:$,sourceIndex:j,fallbackType:E})=>{const q=e(Z,E);return{id:`${J.firebaseId||J.nombre||"perfil"}-${$}-${j}`,url:q.url,label:q.label,type:q.type,isGif:q.type==="image"&&j1(q.url),nombre:J.nombre||"Sin nombre",profesion:J.profesion||"Perfil",nacionalidad:J.nacionalidad||"",fotoPerfil:J.fotos?.[0]||q.url,profileId:J.firebaseId,sourceCharacterId:X,sourceTag:$,sourceIndex:j}})})},[F]),_J=m(()=>{return YQ.filter((J)=>Boolean(J.url))},[YQ]),hX=m(()=>{return _J.reduce((J,X)=>{const Y=X.label||"";if(!J[Y])J[Y]=[];J[Y].push(X);return J},{})},[_J]),iY=m(()=>{return _J.reduce((J,X)=>{const Y=X.profileId||X.nombre;if(!Y)return J;if(!J[Y])J[Y]=[];J[Y].push(X);return J},{})},[_J]),$0=m(()=>{return new Set(_J.map((J)=>J.profileId).filter(Boolean)).size},[_J]),lY=m(()=>{return Object.entries(pY||{}).reduce((J,[X,Y])=>{J[X]=new Set(Array.isArray(Y)?Y:[]);return J},{})},[pY]),vJ=m(()=>{if(g==="GENERAL")return[{id:"GENERAL",nombre:"General",profesion:"Archivo global",nacionalidad:"",fotoPerfil:_J[0]?.url||"",photos:_J.filter((J)=>!n0.includes(J.label||""))}];if(g==="PERSONAJE")return Object.entries(iY).map(([J,X])=>{const Y=X[0]||{};return{id:`PERSONAJE-${J}`,profileId:Y.profileId||null,nombre:Y.nombre||"Sin nombre",profesion:Y.profesion||"Perfil",nacionalidad:Y.nacionalidad||"",fotoPerfil:Y.fotoPerfil||Y.url||"",photos:X}}).filter((J)=>J.photos.length>0).sort((J,X)=>J.nombre.localeCompare(X.nombre,"es",{sensitivity:"base"}));if(g==="ETIQUETA")return XJ.map((J)=>{const X=hX[J]||[];return{id:`ETIQUETA-${J}`,nombre:`Etiqueta ${J}`,profesion:"Archivo por etiqueta",nacionalidad:"",fotoPerfil:X[0]?.url||"",photos:X}}).filter((J)=>J.photos.length>0);return(k||[]).map((J)=>{const X=_J.filter((Y)=>{if(!Y.profileId)return!1;const Z=lY[Y.profileId];return Z?Z.has(J.firebaseId):!1});return{id:`CARPETA-${J.firebaseId}`,nombre:J.label||"Carpeta sin nombre",profesion:"Categoría",nacionalidad:"",fotoPerfil:J.coverImg||X[0]?.fotoPerfil||X[0]?.url||"",photos:X}}).filter((J)=>J.photos.length>0).sort((J,X)=>J.nombre.localeCompare(X.nombre,"es",{sensitivity:"base"}))},[_J,hX,iY,k,g,lY]),dJ=m(()=>{if(g==="GENERAL")return vJ[0]||null;if(!hQ)return null;return vJ.find((J)=>J.id===hQ.id)||null},[vJ,hQ,g]),NJ=m(()=>{if(g!=="PERSONAJE")return[];return vJ.filter((J)=>CQ.includes(J.id))},[vJ,g,CQ]),zQ=m(()=>{if(g==="PERSONAJE")return NJ.flatMap((J)=>J.photos||[]);if(g==="ETIQUETA"){if(!eJ.length)return[];return _J.filter((J)=>eJ.includes(J.label))}return dJ?.photos||_J},[g,NJ,dJ,_J,eJ]),H0=m(()=>{const J=zQ.reduce((X,Y)=>{const Z=Y.label||"";if(!Z)return X;X[Z]=(X[Z]||0)+1;return X},{});return XJ.reduce((X,Y)=>{X[Y]=J[Y]||0;return X},{})},[zQ]),y=m(()=>{return zQ.filter((J)=>g==="ETIQUETA"?!0:SJ==="INICIAL"?J.label!=="X":SJ==="100"?!0:J.label===SJ)},[zQ,SJ,g]),yX=m(()=>{return y.slice(0,OY)},[y,OY]),j0=yX.length<y.length,XX=EZ[g]||g,YX=g!=="GENERAL"&&g!=="ETIQUETA",tY=m(()=>{if(g!=="PERSONAJE")return[];return vJ.filter((J)=>!CQ.includes(J.id))},[vJ,g,CQ]),w=RJ===null?null:y[HQ(RJ,y.length)]||null,MJ=m(()=>{return YQ.filter((J)=>{if(J.type!=="image")return!1;if(!J.url)return!0;return Boolean(yY[J.id])})},[YQ,yY]),oY=m(()=>{const J=MJ.reduce((X,Y)=>{const Z=Y.profileId||Y.nombre||"sin-perfil";if(!X[Z])X[Z]={id:Z,nombre:Y.nombre||"Sin nombre",profesion:Y.profesion||"Perfil",nacionalidad:Y.nacionalidad||"",fotos:[]};X[Z].fotos.push(Y);return X},{});return Object.values(J).map((X)=>({...X,fotos:X.fotos.sort((Y,Z)=>(Y.label||"").localeCompare(Z.label||"","es",{sensitivity:"base"}))})).sort((X,Y)=>X.nombre.localeCompare(Y.nombre,"es",{sensitivity:"base"}))},[MJ]);n(()=>{if(!w){JQ(!1);yQ("");mQ("");mJ("");return}JQ(!1);yQ(w.label||"");mQ(w.url||"");mJ("")},[w]);n(()=>{if(V!=="GALERIA"){DQ(null);o(null)}},[V]);n(()=>{LY(40);o(null)},[g,SJ,eJ,CQ,hQ,F.length]);n(()=>{DQ(null);o(null);DX([]);_Y([])},[g]);n(()=>{if(RJ===null)return;if(!y.length){o(null);return}if(RJ>=y.length)o(0)},[y,RJ]);n(()=>{if(RJ===null)return;const J=(X)=>{if(X.key==="Escape"){o(null);return}if(!y.length)return;if(X.key==="ArrowRight")o((Y)=>HQ((Y??0)+1,y.length));if(X.key==="ArrowLeft")o((Y)=>HQ((Y??0)-1,y.length))};window.addEventListener("keydown",J);return()=>window.removeEventListener("keydown",J)},[y.length,RJ]);n(()=>{if(RJ===null){RQ(!1);CX(!1);WY(!1)}},[RJ]);n(()=>{if(!LX)return;const J=(Y)=>{if(T.current&&!T.current.contains(Y.target))IQ(!1)},X=(Y)=>{if(Y.key==="Escape")IQ(!1)};document.addEventListener("mousedown",J);window.addEventListener("keydown",X);return()=>{document.removeEventListener("mousedown",J);window.removeEventListener("keydown",X)}},[LX]);n(()=>{let J=!1;const X=YQ.filter((Z)=>Z.type==="image"&&Z.url);if(!X.length){kX({});return}(async()=>{const Z=8,$=[];for(let E=0;E<X.length;E+=Z){const q=X.slice(E,E+Z),W=await Promise.all(q.map(async(H)=>({id:H.id,isBroken:await CZ(H.url)})));$.push(...W);if(J)return}if(J)return;const j=$.reduce((E,q)=>{E[q.id]=q.isBroken;return E},{});kX(j)})();return()=>{J=!0}},[YQ]);n(()=>{if(!KX)return;const J=MJ.reduce((X,Y)=>{X[Y.id]=Y.url;return X},{});mY(J);uY({})},[KX,MJ]);n(()=>{if(cJ.current){clearTimeout(cJ.current);cJ.current=null}if(!AJ||!w)return;if(w.type==="video")return;const J=RX*1000;cJ.current=setTimeout(()=>{o((X)=>FZ(X,y,xJ))},J);return()=>{if(cJ.current){clearTimeout(cJ.current);cJ.current=null}}},[AJ,w,y,xJ,RX]);n(()=>{if(!w||!pQ.current)return;pQ.current=!1;requestAnimationFrame(()=>{_0()})},[w]);const mX=typeof window!=="undefined"?window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches:!1,aY=()=>{const J=nQ.current;if(!J)return;J.classList.add("mobile-gallery-fallback-fullscreen");document.body.classList.add("mobile-gallery-fallback-active")},q0=()=>{const J=nQ.current;if(J)J.classList.remove("mobile-gallery-fallback-fullscreen");document.body.classList.remove("mobile-gallery-fallback-active")},_0=()=>{const J=nQ.current;if(!J)return;if(document.fullscreenElement)return;const X=J.requestFullscreen||J.webkitRequestFullscreen||J.msRequestFullscreen;if(typeof X==="function")Promise.resolve(X.call(J)).catch(()=>{if(mX)aY()});else if(mX)aY()},W0=()=>{if(!document.fullscreenElement)return;const J=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen;if(typeof J==="function")Promise.resolve(J.call(document)).catch(()=>{})},rY=(J,{autoplay:X=!1,fromGeneralPlay:Y=!1}={})=>{pQ.current=!!X;o(J);RQ(X);WY(Y);JQ(!Y)},O0=(J)=>{if(!J)return;DX((X)=>X.includes(J)?X:[...X,J]);o(null)},L0=(J)=>{if(!J)return;DX((X)=>X.filter((Y)=>Y!==J));o(null)},E0=(J)=>{if(!J)return;_Y((X)=>X.includes(J)?X.filter((Y)=>Y!==J):[...X,J]);o(null)},F0=async()=>{if(!(typeof window!=="undefined"&&typeof window.JSZip!=="undefined")){window.alert("No se pudo iniciar la descarga: falta la librería ZIP.");return}if(!y.length){window.alert("No hay archivos visibles para descargar.");return}const X=(Z="")=>String(Z||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[\/:*?"<>|]/g,"-").replace(/\s+/g," ").trim(),Y=(Z="")=>{return((String(Z||"").split("?")[0].split("#")[0].match(/\.([a-zA-Z0-9]{2,5})$/)||[])[1]||"jpg").toLowerCase()};FY(!0);try{const Z=new window.JSZip,$=y.filter((P)=>P?.url);let j=0,E=0,q=0;const H=String(window.GALLERY_DOWNLOAD_PROXY||"").trim()||"https://corsproxy.io/?",L=(P)=>{if(!H)return"";if(H.includes("{url}"))return H.replace("{url}",encodeURIComponent(P));const h=H.endsWith("?")||H.endsWith("=")?"":H.includes("?")?"&":"?";return`${H}${h}${encodeURIComponent(P)}`},U=async(P)=>{const h=await fetch(P,{mode:"cors"});if(!h.ok)throw new Error(`HTTP ${h.status}`);return{blob:await h.blob(),viaProxy:!1}};for(let P=0;P<$.length;P+=1){const h=$[P],u=X(h.nombre||"Sin nombre")||"Sin nombre",r=Y(h.url),b=X(h.label||"sin-etiqueta")||"sin-etiqueta",l=`${String(P+1).padStart(4,"0")}_${b}.${r}`;try{let f;try{f=await U(h.url)}catch(TJ){const nJ=L(h.url);if(!nJ)throw TJ;const pJ=await fetch(nJ,{mode:"cors"});if(!pJ.ok)throw new Error(`Proxy HTTP ${pJ.status}`);f={blob:await pJ.blob(),viaProxy:!0}}Z.folder(u).file(l,f.blob);j+=1;if(f.viaProxy)q+=1}catch(f){E+=1;console.warn("No se pudo descargar un archivo de la galería:",h.url,f)}}if(!j){window.alert("No se pudo descargar ningún archivo. Revisá permisos CORS/URLs.");return}const C=await Z.generateAsync({type:"blob"}),z=URL.createObjectURL(C),B=document.createElement("a"),G=new Date().toISOString().slice(0,10);B.href=z;B.download=`galeria-completa-${G}.zip`;document.body.appendChild(B);B.click();B.remove();URL.revokeObjectURL(z);if(E>0)window.alert(`Descarga completada con avisos: ${j} archivos incluidos, ${E} omitidos y ${q} recuperados por proxy.`)}catch(Z){console.error("Error al generar ZIP de galería:",Z);window.alert("No se pudo crear el ZIP de la galería.")}finally{FY(!1)}},eY=()=>{pQ.current=!1;RQ(!1);o(null);q0();W0()},NQ=()=>o((J)=>FZ(J,y,xJ)),D1=()=>o((J)=>HQ((J??0)-1,y.length)),U0=async()=>{if(!w?.profileId||!w?.sourceTag||!Number.isInteger(w?.sourceIndex))return;const J=(DY||"").trim();if(!J){mJ("La URL no puede estar vacía.");return}if(VZ(J)||!ZJ(J,"")){mJ("La URL está bloqueada o no es válida.");return}try{BY(!0);mJ("");if(J!==w.url)await sY({profileId:w.profileId,sourceTag:w.sourceTag,sourceIndex:w.sourceIndex,url:J});await tZ({profileId:w.profileId,sourceTag:w.sourceTag,sourceIndex:w.sourceIndex,label:VY});JQ(!1)}catch(X){mJ("No se pudo guardar la edición del ítem.");console.error("Error al actualizar etiqueta de la multimedia:",X)}finally{BY(!1)}},V0=(J,X)=>{mY((Y)=>({...Y,[J]:X}))},JZ=(J,X)=>{if(!J)return;uY((Y)=>({...Y,[J]:Boolean(X)}))},D0=(J)=>{const X=(GX[J?.id]||J?.url||"").trim();if(!X)return;window.open(X,"_blank","noopener,noreferrer")},C0=async(J)=>{if(!J)return;const X=(GX[J.id]||"").trim();if(!X)return;sQ((Y)=>({...Y,[J.id]:!0}));try{if(X!==J.url)await sY({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex,url:X});const Y=await CZ(X);kX((Z)=>({...Z,[J.id]:Y}));if(!Y)JZ(J.id,!1)}catch(Y){console.error("Error al actualizar URL rota:",Y)}finally{sQ((Y)=>({...Y,[J.id]:!1}))}},R0=async(J)=>{if(!J)return;if(!window.confirm("¿Eliminar esta foto rota de la galería?"))return;sQ((Y)=>({...Y,[J.id]:!0}));try{await oZ({profileId:J.profileId,sourceTag:J.sourceTag,sourceIndex:J.sourceIndex})}catch(Y){console.error("Error al eliminar foto rota:",Y)}finally{sQ((Y)=>({...Y,[J.id]:!1}))}},B0=m(()=>{if(g==="PERSONAJE")return NJ.length?`${NJ.length} personaje${NJ.length>1?"s":""} seleccionado${NJ.length>1?"s":""}`:"Sin personajes seleccionados";if(dJ&&YX)return dJ.nombre;return XX},[g,NJ,dJ,YX,XX]),T0=(J)=>{J.preventDefault();const X={...x};if(t)M.ref(`perfiles/${t}`).set(X).then(()=>{hJ(!1);LQ(null)}).catch((Y)=>console.error("Error al excitar la base de datos:",Y));else M.ref("perfiles").push(X).then(()=>{hJ(!1);i(tQ())}).catch((Y)=>console.error("No pudo entrar el perfil:",Y))},A0=async(J)=>{J.preventDefault();const{firebaseId:X,...Y}=K,Z={...Y,type:"custom"};try{if(X)await M.ref(`categorias/${X}`).update(Z);else await M.ref("categorias").push(Z);bQ(!1);vX()}catch($){console.error("La categoría no quiso guardarse:",$)}},z0=async(J)=>{if(!J)return;try{await M.ref(`categorias/${J}`).remove();A((X)=>X.filter((Y)=>Y.firebaseId!==J));UQ((X)=>X===J?null:X)}catch(X){console.error("No se pudo borrar la categoría:",X);alert("No se pudo borrar la carpeta. Probá de nuevo.")}},uX=(J)=>{if(!J?.firebaseId)return;vQ("");FQ(J);$Y(!0)},N0=()=>{if(!t)return;const J=F.find((X)=>X.firebaseId===t);if(!J)return;uX(J)},fX=()=>{$Y(!1);EQ(null);FQ(null)},M0=async(J)=>{if(!J)return;await M.ref(`perfiles/${J}`).remove();v((X)=>X.filter((Y)=>Y.firebaseId!==J))},K0=async()=>{if(!UJ?.firebaseId)return;try{await M0(UJ.firebaseId);vQ("");hJ(!1);if(t===UJ.firebaseId)LQ(null);fX()}catch(J){console.error("No se pudo borrar el perfil:",J);vQ("No se pudo borrar el perfil en Firebase. Probá de nuevo.")}},ZX=()=>{IQ(!1);FQ(null)},w0=(J,X)=>{J.preventDefault();IQ(!0);SZ({x:J.clientX,y:J.clientY});FQ(X)},k0=()=>{if(!UJ)return;i(xX(UJ));LQ(UJ.firebaseId);hJ(!0);ZX()},G0=async()=>{if(!UJ?.firebaseId)return;if(!confirm("¿Borrar perfil? Esta acción también lo elimina de Firebase.")){ZX();return}try{await M.ref(`perfiles/${UJ.firebaseId}`).remove();v((X)=>X.filter((Y)=>Y.firebaseId!==UJ.firebaseId));ZX()}catch(X){console.error("No se pudo borrar el perfil:",X);alert("No se pudo borrar el perfil. Probá de nuevo.");ZX()}},QZ=(J)=>{const X=J?.estaturaCm;if(X===void 0||X===null||X==="")return"Sin dato";const Y=Number(X);if(Number.isNaN(Y)||Y<=0)return"Sin dato";return`${Math.round(Y)} cm`},cX=(J="")=>String(J||"").trim().toLowerCase(),S0=(J="")=>String(J||"").trim(),MQ=(J=[])=>[...J||[]].filter((X)=>X?.firebaseId&&(X?.nombre||"").trim()).sort((X,Y)=>(X.nombre||"").localeCompare(Y.nombre||"","es",{sensitivity:"base"})).map((X)=>X.firebaseId),XZ=(J=[],X="GENERAL")=>{const Y=String(X||"GENERAL").trim().toUpperCase(),Z=[...J||[]].filter((q)=>q?.firebaseId&&(q?.nombre||"").trim()).sort((q,W)=>(q.nombre||"").localeCompare(W.nombre||"","es",{sensitivity:"base"}));if(Y==="GENERAL")return[{key:"all",label:"Todas",typeLabel:"General",ids:Z.map((q)=>q.firebaseId)}];if(Y==="EDADES"){const q={"18-28":{key:"18-28",label:"18–28",typeLabel:"Edad",ids:[]},"29-39":{key:"29-39",label:"29–39",typeLabel:"Edad",ids:[]},"40+":{key:"40+",label:"40–50+",typeLabel:"Edad",ids:[]}};Z.forEach((W)=>{const H=bJ(W.fechaNacimiento);if(!Number.isFinite(H)||H<18)return;if(H<=28)q["18-28"].ids.push(W.firebaseId);else if(H<=39)q["29-39"].ids.push(W.firebaseId);else q["40+"].ids.push(W.firebaseId)});return Object.values(q)}const $=Y==="NACIONALIDADES"?"nacionalidad":"profesion",j=Y==="NACIONALIDADES"?"Nacionalidad":"Profesión",E=Z.reduce((q,W)=>{const H=cX(W?.[$]);if(!H)return q;if(!q[H])q[H]={key:H,label:S0(W?.[$])||H,typeLabel:j,ids:[]};q[H].ids.push(W.firebaseId);return q},{});return Object.values(E).sort((q,W)=>q.label.localeCompare(W.label,"es",{sensitivity:"base"}))},sX=(J=[],X="GENERAL",Y="")=>{const Z=[...J||[]].filter((q)=>q?.firebaseId&&(q?.nombre||"").trim()).sort((q,W)=>(q.nombre||"").localeCompare(W.nombre||"","es",{sensitivity:"base"}));if(X==="GENERAL"){const q=Z.map((W)=>W.firebaseId);return{groupedIds:q.length>1?[{key:"general",label:"General",typeLabel:"General",ids:q}]:[],orderedIds:q}}const $=XZ(Z,X),j=cX(Y),E=$.filter((q)=>{if(!j||j==="all")return!0;return cX(q.key)===j}).filter((q)=>q.ids.length>=2);return{groupedIds:E,orderedIds:E.flatMap((q)=>q.ids)}},IJ=(J,X)=>[J,X].sort().join("__"),ZQ=(J)=>{if(!J||typeof J!=="object")return null;const X=String(J.winnerId||"").trim(),Y=String(J.loserId||"").trim();if(!X||!Y||X===Y)return null;return{winnerId:X,loserId:Y,reason:J.reason==="transitive"?"transitive":"direct",playedAt:Number.isFinite(J.playedAt)?J.playedAt:null}},$X=(J={},X="")=>!!ZQ(J?.[X]),KQ=(J={},X=[])=>{const Y=new Set((X||[]).filter(Boolean)),Z={},$={},j={};Object.entries(J||{}).forEach(([H,L])=>{const U=ZQ(L);if(!U)return;const{winnerId:C,loserId:z}=U;if(Y.size&&(!Y.has(C)||!Y.has(z)))return;const B=IJ(C,z),G={winnerId:C,loserId:z,reason:"direct",playedAt:U.playedAt??Date.now()};Z[B]=G;$[B]=G;if(!j[C])j[C]=new Set;j[C].add(z)});new Set([...Object.keys(j),...Object.values(j).flatMap((H)=>[...H])]).forEach((H)=>{const L=[...j[H]||[]],U=new Set;while(L.length){const C=L.shift();if(!C||U.has(C)||C===H)continue;U.add(C);const z=IJ(H,C);if(!$[z])$[z]={winnerId:H,loserId:C,reason:"transitive",playedAt:null};(j[C]||[]).forEach((B)=>{if(!U.has(B))L.push(B)})}});const q=Object.fromEntries(Object.entries(j).map(([H,L])=>[H,[...L]])),W=P0($);return{directMatchups:Z,matchups:$,victoryGraph:q,stats:W}},wQ=(J,X={})=>{const Y=LJ(J);if(!Y)return null;const Z=MQ(F),$=KQ(X?.directMatchups||X?.matchups||{},Z);return{arenaName:Y,orderedIds:Z,...$}},x0=(J=[],X={})=>{for(let Y=0;Y<J.length-1;Y++)for(let Z=Y+1;Z<J.length;Z++){const $=IJ(J[Y],J[Z]);if(!$X(X,$))return[J[Y],J[Z]]}return null},dX=(J=[],X={},Y={})=>{const Z={...X||{},...Y||{}};for(const $ of J){const j=x0($?.ids||[],Z);if(j)return j}return null},kQ=(J=[],X,Y="")=>{if(!X)return null;return J.find((Z)=>{const $=Z?.ids||[];if(!$.includes(X))return!1;return!Y||$.includes(Y)})||null},P0=(J={})=>{return Object.keys(J||{}).reduce((X,Y)=>{const Z=ZQ(J[Y]);if(!Z)return X;const{winnerId:$,loserId:j}=Z,E=X[$]||{wins:0,battles:0},q=X[j]||{wins:0,battles:0};return{...X,[$]:{wins:E.wins+1,battles:E.battles+1},[j]:{wins:q.wins,battles:q.battles+1}}},{})},YZ=(J="",X="")=>{const Y=String(X||"").trim();if(!J||!Y)return!1;return J.endsWith(`::${Y}`)},b0=(J,X)=>{const Y=ZQ(X);if(!Y||Y.reason!=="direct")return J||null;const Z=ZQ(J);if(!Z||Z.reason!=="direct")return Y;const $=Z.playedAt??0;return(Y.playedAt??0)>=$?Y:Z},ZZ=(J,X=$J)=>{const Y=String(J||"").trim();if(!Y)return KQ({},[]);const Z={};Object.entries(X||{}).forEach(([j,E])=>{if(!YZ(j,Y))return;const q=E?.directMatchups||{};Object.entries(q).forEach(([W,H])=>{Z[W]=b0(Z[W],H)})});const $=[...F||[]].map((j)=>j?.firebaseId).filter(Boolean).sort((j,E)=>String(j).localeCompare(String(E),"es",{sensitivity:"base"}));return KQ(Z,$)},$Z=(J,X)=>{const Z=(ZZ(J).stats||{})[X]||{wins:0,battles:0},$=Z.battles?Math.round(Z.wins/Z.battles*100):0;return{...Z,score:$}},HZ=(J,X=$J)=>{const Y=ZZ(J,X).stats||{};return[...F||[]].filter((Z)=>Z?.firebaseId).reduce((Z,$)=>{const j=Y[$.firebaseId]||{wins:0,battles:0};Z[$.firebaseId]=j.battles?Math.round(j.wins/j.battles*100):0;return Z},{})},C1=(J=[],X={})=>{for(let Y=0;Y<J.length-1;Y++)for(let Z=Y+1;Z<J.length;Z++){const $=IJ(J[Y],J[Z]);if(!$X(X,$))return[J[Y],J[Z]]}return null},jZ=(J,X,Y=null)=>{if(!X)return null;const Z=q1.includes(X.mode)?X.mode:"GENERAL",$=String(X.groupKey||"all").trim().toLowerCase()||"all",j=sX(F,Z,$),E=j.groupedIds||[],q=j.orderedIds||[],W=wQ(J,Y||FJ?.[LJ(J)]||{}),H=W?.directMatchups||{},L=W?.matchups||{},U=W?.victoryGraph||{},C=W?.stats||{},z=X.championId,B=X.challengerId,G=kQ(E,z,B),P=!!z&&!!B&&z!==B&&!!G&&!$X(L,IJ(z,B)),h=E.length?dX(E,X.matchups||{},L):null,u=P?[z,B]:h,r=!h,b=kQ(E,u?.[0],u?.[1]);return{...X,mode:Z,groupKey:$,groupedIds:E,orderedIds:q,stats:C,directMatchups:H,matchups:L,victoryGraph:U,championId:u?u[0]:null,challengerId:u?u[1]:null,activeGroupKey:b?.key||null,activeGroupLabel:b?`${b.typeLabel}: ${b.label}`:"",isFinished:r}};n(()=>{if(!F.length)return;const J={},X=[];Object.entries($J||{}).forEach(([Y,Z])=>{const{arenaName:$}=BZ(Y),j=jZ($,Z,FJ?.[LJ($)]);if(!j)return;if(JSON.stringify(Z)===JSON.stringify(j))return;J[Y]=j;X.push(M.ref(`arenaBattleState/${Y}`).set(j).catch((q)=>console.error("No se pudo normalizar el estado del arena:",q)))});if(!Object.keys(J).length)return;GJ((Y)=>({...Y,...J}));Promise.all(X).catch(()=>{})},[$J,FJ,F]);n(()=>{if(!F.length)return;const J={};Object.entries($J||{}).forEach(([Z,$])=>{const{arenaName:j}=BZ(Z),E=LJ(j);if(!E)return;if(!J[E])J[E]={};Object.entries($?.directMatchups||{}).forEach(([q,W])=>{const H=ZQ(W);if(!H)return;J[E][q]={winnerId:H.winnerId,loserId:H.loserId,reason:"direct",playedAt:H.playedAt??Date.now()}})});const X=[],Y={};Object.entries(J).forEach(([Z,$])=>{const j=LJ(Z);if(!j||FJ?.[j])return;const E=wQ(Z,{directMatchups:$});if(!E)return;Y[j]=E;X.push(M.ref(`arenaGlobalState/${j}`).set(E).catch((q)=>console.error("No se pudo migrar arenaGlobalState:",q)))});if(!Object.keys(Y).length)return;gJ((Z)=>({...Z,...Y}));Promise.all(X).catch(()=>{})},[$J,FJ,F]);const qZ=(J,X=S,Y=d)=>{const Z=[...F].filter((G)=>G?.firebaseId&&(G?.nombre||"").trim()).sort((G,P)=>(G.nombre||"").localeCompare(P.nombre||"","es",{sensitivity:"base"}));if(Z.length<2)return;const $=String(X||"GENERAL").trim().toUpperCase(),j=sX(Z,$,Y),E=j.groupedIds||[],q=j.orderedIds||[],W=LJ(J),H=wQ(J,FJ?.[W]||{}),L=H?.matchups||{},U=dX(E,{},L);if(!U)return;const C=kQ(E,U[0],U[1]),z={mode:$,groupKey:String(Y||"").trim().toLowerCase()||"all",groupedIds:E,orderedIds:q,stats:H?.stats||{},directMatchups:H?.directMatchups||{},matchups:L,victoryGraph:H?.victoryGraph||{},championId:U[0],challengerId:U[1],activeGroupKey:C?.key||null,activeGroupLabel:C?`${C.typeLabel}: ${C.label}`:"",isFinished:!1},B=WQ(J,X,Y);if(!B)return;GJ((G)=>({...G,[B]:z}));if(!FJ?.[W]){gJ((G)=>({...G,[W]:H}));M.ref(`arenaGlobalState/${W}`).set(H).catch((G)=>console.error("No se pudo guardar arenaGlobalState inicial:",G))}M.ref(`arenaBattleState/${B}`).set(z).catch((G)=>console.error("No se pudo guardar el estado del arena:",G))},v0=async(J,X,Y)=>{if(!J)return;try{await M.ref(`perfiles/${J}/puntuaciones/${X}`).set(Y)}catch(Z){console.error("No se pudo actualizar score del arena:",Z)}},_Z=(J,X,Y=S,Z=d)=>{const $=WQ(J,Y,Z),j=$J[$];if(!j||j.isFinished)return;const E=LJ(J),q=wQ(J,FJ?.[E]||{}),W=Array.isArray(j.groupedIds)&&j.groupedIds.length?j.groupedIds:sX(F,j.mode||"GENERAL",j.groupKey||"all").groupedIds,{championId:H,challengerId:L}=j;if(X!==H&&X!==L)return;const U=X===H?L:H;if(!X||!U)return;const C=IJ(X,U),z={...q?.directMatchups||{},[C]:{winnerId:X,loserId:U,reason:"direct",playedAt:Date.now()}},B=KQ(z,MQ(F)),G=B.matchups,P=B.stats||{},h=kQ(W,X,U),r=((DJ,OJ,lX)=>{if(!OJ)return null;for(const qX of DJ){if(!qX||qX===OJ)continue;const s0=IJ(OJ,qX);if(!$X(lX,s0))return qX}return null})(h?.ids||[],X,G),b=r?[X,r]:dX(W,j.matchups||{},G),l=kQ(W,b?.[0],b?.[1]),f={arenaName:E,orderedIds:MQ(F),directMatchups:B.directMatchups,matchups:G,victoryGraph:B.victoryGraph,stats:P},TJ={...j,groupedIds:W,directMatchups:f.directMatchups,stats:P,matchups:G,victoryGraph:B.victoryGraph,championId:b?b[0]:null,challengerId:b?b[1]:null,activeGroupKey:l?.key||null,activeGroupLabel:l?`${l.typeLabel}: ${l.label}`:"",isFinished:!b},nJ={...$J||{},[$]:TJ},pJ=HZ(J,nJ);v((DJ)=>DJ.map((OJ)=>{if(!OJ?.firebaseId||!Object.prototype.hasOwnProperty.call(pJ,OJ.firebaseId))return OJ;const lX=pJ[OJ.firebaseId];return{...OJ,puntuaciones:{...OJ.puntuaciones||{},[J]:lX}}}));Object.entries(pJ).forEach(([DJ,OJ])=>{v0(DJ,J,OJ)});GJ((DJ)=>({...DJ,[$]:TJ}));gJ((DJ)=>({...DJ,[E]:f}));Promise.all([M.ref(`arenaGlobalState/${E}`).set(f),M.ref(`arenaBattleState/${$}`).set(TJ)]).catch((DJ)=>console.error("No se pudo guardar avance de batallas:",DJ))},I0=async()=>{if(!window.confirm("Esto va a poner TODAS las calificaciones en 0. ¿Continuar?"))return;try{await Promise.all((F||[]).map((X)=>{if(!X?.firebaseId)return Promise.resolve();return M.ref(`perfiles/${X.firebaseId}/puntuaciones`).set(SQ())}));v((X)=>X.map((Y)=>({...Y,puntuaciones:SQ()})));GJ({});gJ({});await M.ref("arenaBattleState").remove();await M.ref("arenaGlobalState").remove();alert("Calificaciones reiniciadas en 0 para todos los items.")}catch(X){console.error("No se pudieron resetear las calificaciones:",X);alert("No se pudo completar el reseteo.")}},g0=async(J,X=S,Y=d)=>{if(!J){alert("Seleccioná un item para resetear.");return}if(!window.confirm(`Esto va a poner en 0 el item "${J}" para todos los perfiles. ¿Continuar?`))return;try{const $={...$J||{}},j=Object.keys($).filter((q)=>YZ(q,J));j.forEach((q)=>delete $[q]);await Promise.all(j.map((q)=>M.ref(`arenaBattleState/${q}`).remove()));GJ($);await Promise.all((F||[]).map((q)=>{if(!q?.firebaseId)return Promise.resolve();return M.ref(`perfiles/${q.firebaseId}/puntuaciones/${J}`).set(0)}));v((q)=>q.map((W)=>({...W,puntuaciones:{...W.puntuaciones||{},[J]:0}})));const E=WQ(J,X,Y);GJ((q)=>{if(!q?.[E])return q;const W={...q};delete W[E];return W});gJ((q)=>{const W=LJ(J);if(!q?.[W])return q;const H={...q};delete H[W];return H});await M.ref(`arenaBattleState/${E}`).remove();await M.ref(`arenaGlobalState/${LJ(J)}`).remove();alert(`Se reseteó "${J}" (${_Q(X)}) y se limpió su estado de batallas.`)}catch($){console.error("No se pudo resetear el item:",$);alert("No se pudo resetear ese item.")}},WZ=async(J,X,Y,Z=S,$=d)=>{const j=WQ(J,Z,$),E=$J?.[j],q=LJ(J),W=wQ(J,FJ?.[q]||{});if(!E){alert("Esa arena no tiene estado cargado.");return}const H=W?.matchups||{},L=W?.directMatchups||{};if(!Object.keys(H).filter((B)=>!!H[B]).length){alert("No hay cruces jugados para resetear en esta arena.");return}const C=IJ(X,Y);if(!H[C]){alert("Ese cruce no existe o no fue jugado todavía.");return}if(!L[C]){alert("Ese cruce se resolvió por transitividad. Deshacé primero la batalla directa correspondiente.");return}if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{const B={...L};delete B[C];const G=KQ(B,MQ(F)),P={arenaName:q,orderedIds:MQ(F),directMatchups:G.directMatchups,matchups:G.matchups,victoryGraph:G.victoryGraph,stats:G.stats},h={...E,directMatchups:P.directMatchups,matchups:P.matchups,victoryGraph:P.victoryGraph,stats:P.stats},u=jZ(J,h,P);if(!u){alert("No se pudo recomponer el estado del arena.");return}GJ((l)=>({...l,[j]:u}));gJ((l)=>({...l,[q]:P}));await Promise.all([M.ref(`arenaGlobalState/${q}`).set(P),M.ref(`arenaBattleState/${j}`).set(u)]);const r={...$J||{},[j]:u},b=HZ(J,r);await Promise.all(Object.entries(b).map(async([l,f])=>{await M.ref(`perfiles/${l}/puntuaciones/${J}`).set(f)}));v((l)=>l.map((f)=>{if(!f?.firebaseId||!Object.prototype.hasOwnProperty.call(b,f.firebaseId))return f;const TJ=b[f.firebaseId];return{...f,puntuaciones:{...f.puntuaciones||{},[J]:TJ}}}));alert("Batalla reseteada correctamente.")}catch(B){console.error("No se pudo resetear la batalla:",B);alert("No se pudo resetear esa batalla.")}},h0=m(()=>{const J=F;if(V==="RANKING")return[...J].sort((X,Y)=>parseFloat(qJ(Y))-parseFloat(qJ(X)));if(V==="CATEGORIAS"&&QJ)return J.filter((X)=>QX(X).includes(QJ));return J},[F,V,QJ]),OZ=m(()=>{return new Set(MJ.map((J)=>String(J?.profileId||"").trim()).filter(Boolean))},[MJ]),HX=m(()=>{const J=String(BX||"").trim().toLowerCase(),X=(Z)=>{return[Z?.profesion,Z?.profesiones].flatMap((j)=>{if(Array.isArray(j))return j;if(typeof j==="string")return j.split(",");return[]}).map((j)=>String(j||"").trim()).filter(Boolean).join(" ")},Y=(Z)=>{if(!Z||typeof Z!=="object")return!1;return[String(Z.nombre||"").trim(),String(Z.nacionalidad||"").trim(),String(Z.ciudad||"").trim(),X(Z),String(Z.fechaNacimiento||"").trim(),String(Z.estaturaCm||"").trim()].some(Boolean)||Array.isArray(Z.fotos)&&Z.fotos.some(Boolean)};return[...F||[]].filter((Z)=>{if(!Y(Z))return!1;if(XQ&&Y1(Z))return!1;if(dQ){const j=String(Z?.firebaseId||Z?.id||"").trim();if(!j||!OZ.has(j))return!1}if(!J)return!0;return[String(Z.nombre||"").trim(),String(Z.nacionalidad||"").trim(),X(Z)].join(" ").toLowerCase().includes(J)}).sort((Z,$)=>String(Z?.nombre||"").localeCompare(String($?.nombre||""),"es",{sensitivity:"base"}))},[F,BX,XQ,dQ,OZ]),a=m(()=>HX.find((J)=>J?.firebaseId===cQ)||null,[HX,cQ]);n(()=>{const J=()=>BQ("");document.addEventListener("click",J);return()=>document.removeEventListener("click",J)},[]);const y0=m(()=>{if(!S)return[];return XZ(F,S)},[F,S]),jX=S&&S!=="GENERAL",LZ=(J,X)=>{if(X==="promedio")return Number(qJ(J))||0;if(X==="nombre")return(J.nombre||"").toLowerCase();if(X==="nacionalidad")return(J.nacionalidad||"").toLowerCase();if(X==="edad"){const Y=bJ(J.fechaNacimiento);return typeof Y==="number"?Y:-1}if(X==="Rostro")return rQ(J)||0;if(X==="Cuerpo")return eQ(J)||0;if(X==="Actitud")return JX(J)||0;return Number(J.puntuaciones?.[X]||0)},m0=(J)=>{if(YJ==="promedio")return qJ(J);if(YJ==="Rostro")return rQ(J).toFixed(0);if(YJ==="Cuerpo")return eQ(J).toFixed(0);if(YJ==="Actitud")return JX(J).toFixed(0);if(aJ.includes(YJ))return Number(J.puntuaciones?.[YJ]||0).toFixed(0);return qJ(J)},$Q=(J,X="asc")=>{if(YJ===J){EX((Y)=>Y==="asc"?"desc":"asc");return}qY(J);EX(X)},u0=(J,X)=>{const Y=sJ[X]||[],Z=new Set,$=new Set,j=Object.entries($J||{});Y.forEach((W)=>{const H=FJ?.[LJ(W)]?.matchups||{};Object.values(H).forEach((L)=>{if(!L||typeof L!=="object")return;if(L.winnerId===J&&L.loserId)Z.add(L.loserId);if(L.loserId===J&&L.winnerId)$.add(L.winnerId)})});const E=new Map((F||[]).filter((W)=>W?.firebaseId).map((W)=>[W.firebaseId,W.nombre||"Sin nombre"])),q=(W)=>[...W].map((H)=>E.get(H)).filter(Boolean).sort((H,L)=>H.localeCompare(L,"es",{sensitivity:"base"}));return{wins:q(Z),losses:q($)}},nX=(J,X)=>{const Y=String(X||"").trim(),Z=String(J||"").trim();if(!Y||!Z)return{arenaName:Y,wins:[],losses:[]};const $=FJ?.[LJ(Y)]?.matchups||{},j=new Map((F||[]).filter((W)=>W?.firebaseId).map((W)=>[W.firebaseId,W.nombre||"Sin nombre"])),E=([W,H])=>{if(!H||typeof H!=="object")return null;const L=String(H.winnerId||"").trim(),U=String(H.loserId||"").trim();if(!L||!U)return null;const C=L===Z;if(!C&&U!==Z)return null;const B=C?U:L;return{pairKey:W,arenaName:Y,profileId:Z,opponentId:B,opponentName:j.get(B)||"Sin nombre",winnerId:L,loserId:U}},q=Object.entries($).map(E).filter(Boolean).sort((W,H)=>W.opponentName.localeCompare(H.opponentName,"es",{sensitivity:"base"}));return{arenaName:Y,wins:q.filter((W)=>W.winnerId===Z),losses:q.filter((W)=>W.loserId===Z)}},f0=(J,X)=>{const Y=nX(J,X),Z=Y.wins.length,$=Y.losses.length,j=Z+$,E=j?Z/j*100:0;return{wins:Z,losses:$,total:j,winRate:E}},pX=[...h0].sort((J,X)=>{const Y=LZ(J,YJ),Z=LZ(X,YJ);let $=0;if(typeof Y==="string"||typeof Z==="string")$=String(Y).localeCompare(String(Z),"es",{sensitivity:"base"});else $=Y-Z;if($===0)return(J.nombre||"").localeCompare(X.nombre||"","es",{sensitivity:"base"});return yJ==="asc"?$:-$}),iX=!BJ,c0=m(()=>FX?pX:pX.slice(0,10),[pX,FX]);return Q("div",{className:"app-space-theme flex h-screen w-screen overflow-hidden bg-[#020617] stone-wall-surface relative",children:[BJ&&Q("aside",{className:"hud-frame hud-frame--panel w-64 shrink-0 theme-surface-card stone-wall-surface border-r theme-border-secondary flex flex-col p-6 z-20 shadow-xl overflow-y-auto relative",children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"mb-12 text-center flex-shrink-0",children:[Q("h1",{className:"neon-sign neon-sign--cyan text-5xl font-black text-[var(--metal-gold)] italic tracking-tighter leading-none",children:"G2"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2",children:"Elite Database"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("nav",{className:"flex-1 space-y-2 mb-8",children:[{id:"EXPLORAR",icon:"layout-grid",label:"Explorar"},{id:"RANKING",icon:"trending-up",label:"Ranking"},{id:"BATALLAS",icon:"swords",label:"Batallas"},{id:"GALERIA",icon:"images",label:"Galería"},{id:"CAMPEONAS",icon:"crown",label:"Campeonas"},{id:"anonimo",icon:"user-round-x",label:"ánonimo"},{id:"TALLER",icon:"hammer",label:"Taller"}].map((J)=>Q("button",{onClick:()=>{I(J.id);UQ(null);DQ(null);o(null);fJ("")},className:`btn-metal sidebar-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-[1.6rem] text-xs transition-all ${V===J.id?"is-active text-[#ecfeff]":"text-slate-900"}`,children:[Q(p,{name:J.icon,size:18},void 0,!1,void 0,this),J.label]},J.id,!0,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>cY(),className:"btn-metal btn-metal--gold py-5 rounded-[2.2rem] text-[11px] flex items-center justify-center gap-2 flex-shrink-0",children:[Q(p,{name:"plus",size:16},void 0,!1,void 0,this)," Nuevo Perfil"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("main",{className:"flex-1 min-w-0 w-full flex flex-col overflow-hidden bg-[#020617] stone-wall-surface relative",children:[Q("button",{onClick:()=>vZ((J)=>!J),className:"sidebar-screen-toggle btn-metal btn-metal--silver rounded-full text-slate-900","aria-label":BJ?"Replegar menú lateral":"Desplegar menú lateral",title:BJ?"Replegar menú lateral":"Desplegar menú lateral",children:Q(p,{name:BJ?"panel-left-close":"panel-left-open",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`hud-section flex-1 overflow-y-auto relative z-10 stone-wall-surface ${BJ?"p-6 md:p-10 lg:p-12":"p-4 md:p-8 lg:p-10"}`,children:[Q("div",{className:"corner-ember-glow corner-ember-glow--left corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),Q("div",{className:"corner-ember-glow corner-ember-glow--right corner-ember-glow--top","aria-hidden":"true"},void 0,!1,void 0,this),a&&Q("div",{className:`fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4 py-8 ${BJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>fJ(""),role:"presentation",children:Q("section",{className:"taller-detail-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto",onClick:(J)=>J.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Ficha del personaje",children:[Q("button",{type:"button",onClick:()=>fJ(""),className:"absolute top-4 right-4 w-10 h-10 rounded-full border border-cyan-200/35 bg-slate-900/80 text-slate-100 flex items-center justify-center hover:bg-slate-800/90 transition","aria-label":"Cerrar ficha",children:Q(p,{name:"x",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 lg:grid-cols-[minmax(260px,320px),1fr] gap-8 items-start",children:[Q("div",{className:"taller-detail-avatar rounded-[1.8rem] overflow-hidden border border-cyan-200/35",children:Q("img",{src:a.fotos?.[0]||"https://via.placeholder.com/500x700",alt:a.nombre||"Perfil seleccionado",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-6",children:[Q("div",{children:[Q("p",{className:"text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 font-black",children:"Ficha del personaje"},void 0,!1,void 0,this),Q("h3",{className:"taller-detail-title text-3xl md:text-4xl font-black uppercase mt-2",children:a.nombre||"Sin nombre"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!a?.isAnonymousGallery&&Q("div",{className:"grid grid-cols-1 gap-4",children:[Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Profesión"},void 0,!1,void 0,this),Q("strong",{children:a.profesion||"No definida"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Nacionalidad - Ciudad"},void 0,!1,void 0,this),Q("strong",{children:`${a.nacionalidad||"No definida"} - ${a.ciudad||"No definida"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Fecha de nacimiento - Edad"},void 0,!1,void 0,this),Q("strong",{children:`${a.fechaNacimiento||"No informado"} - ${bJ(a.fechaNacimiento)} años`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("article",{className:"taller-data-chip",children:[Q("span",{children:"Estatura"},void 0,!1,void 0,this),Q("strong",{children:a.estaturaCm?`${a.estaturaCm} cm`:"No informada"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"pt-2",children:Q("div",{className:"grid grid-cols-2 sm:grid-cols-[1fr,1fr,auto,auto] gap-3 items-center",children:[!a?.isAnonymousGallery&&Q("button",{type:"button",onClick:()=>{gQ({isOpen:!0,profile:a})},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Puntajes"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{PX(a)},className:"btn-metal py-3 rounded-xl text-[11px] font-black tracking-wide uppercase",children:"Ver Galería"},void 0,!1,void 0,this),!a?.isAnonymousGallery&&Q(kJ,{children:[Q("button",{type:"button",onClick:()=>{fJ("");oQ(a)},className:"w-10 h-10 rounded-md bg-yellow-400 text-slate-950 text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Editar ficha completa",title:"Editar ficha completa",children:"✏️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>uX(a),className:"w-10 h-10 rounded-md bg-red-500 text-white text-base font-black flex items-center justify-center leading-none shadow-md hover:brightness-110 transition","aria-label":"Eliminar ficha",title:"Eliminar ficha",children:"\uD83D\uDDD1️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),V==="TALLER"&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"space-y-2",children:Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Taller"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"max-w-2xl",children:Q("input",{id:"tallerSearchInput",type:"text",value:BX,onChange:(J)=>TY(J.target.value),placeholder:"Ej: Argentina, Modelo, Lucía...","aria-label":"Buscar perfiles del taller",className:"w-full rounded-2xl border border-cyan-200/30 bg-slate-950/70 px-5 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-300/70 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-3",children:[Q("button",{type:"button",onClick:()=>nZ((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${XQ?"btn-metal--danger":""}`,children:["Fotos incompletas ",XQ?"(Activo)":""]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>pZ((J)=>!J),className:`btn-metal py-3 px-5 rounded-xl text-[11px] font-black tracking-wide uppercase transition-all ${dQ?"btn-metal--danger":""}`,children:["Fotos Rotas ",dQ?"(Activo)":""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:HX.map((J)=>{const X=JJ(J.profesion),Y=cQ&&cQ===J.firebaseId,Z=Z1(J),$=iZ===(J.firebaseId||J.nombre);return Q("button",{type:"button",onClick:()=>{if(lQ.current){lQ.current=!1;return}BQ("");fJ("");oQ(J)},onContextMenu:(j)=>{if(!XQ||!Z.length)return;j.preventDefault();j.stopPropagation();BQ((E)=>E===(J.firebaseId||J.nombre)?"":J.firebaseId||J.nombre)},onTouchStart:()=>{if(!XQ||!Z.length)return;lQ.current=!1;clearTimeout(iQ.current);iQ.current=setTimeout(()=>{lQ.current=!0;BQ(J.firebaseId||J.nombre)},550)},onTouchEnd:()=>{clearTimeout(iQ.current)},onTouchMove:()=>{clearTimeout(iQ.current)},className:`profile-card rounded-2xl p-4 relative text-left transition-all ${Y?"taller-card--selected":""}`,children:[Q("div",{className:"w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-slate-900/70",children:Q("img",{src:J.fotos?.[0]||"https://via.placeholder.com/400x500",alt:J.nombre||"Personaje",className:"w-full h-full object-cover",loading:"lazy"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-lg font-black text-white uppercase tracking-wide truncate",children:J.nombre||"Sin nombre"},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 truncate",children:J.nacionalidad||"Nacionalidad no definida"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] uppercase font-bold tracking-widest mt-2 truncate",style:{color:X.color,textShadow:`0 0 12px ${X.sombra}`},children:J.profesion||"Profesión no definida"},void 0,!1,void 0,this),$&&Q("button",{type:"button",className:"absolute left-4 right-4 bottom-4 z-20 rounded-xl border border-red-300/55 bg-slate-950/95 px-3 py-3 text-[11px] text-slate-100 text-left shadow-[0_0_24px_rgba(248,113,113,0.45)] transition hover:border-cyan-300/75 hover:text-cyan-100",onClick:(j)=>{j.preventDefault();j.stopPropagation();lZ(J)},role:"tooltip",title:"Ir a la galería de este personaje",children:[Q("p",{className:"font-black uppercase tracking-wider text-red-200 mb-2",children:"Faltan fotos:"},void 0,!1,void 0,this),Q("ul",{className:"space-y-1 mb-2",children:Z.map((j)=>Q("li",{className:"leading-tight",children:["• ",j]},j,!0,void 0,this))},void 0,!1,void 0,this),Q("span",{className:"inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200",children:"Ir a galería ↗"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId||J.nombre,!0,void 0,this)})},void 0,!1,void 0,this),!HX.length&&Q("div",{className:"rounded-2xl border border-slate-500/30 bg-slate-900/50 px-6 py-8 text-center text-sm text-slate-300",children:"No hay personajes que coincidan con la búsqueda."},void 0,!1,void 0,this),Q(H1,{isOpen:fZ,profile:a,onClose:()=>cZ(!1)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),V==="CAMPEONAS"&&!QJ&&(()=>{const J=[{id:"18-23",min:18,max:23},{id:"24-29",min:24,max:29},{id:"30-35",min:30,max:35},{id:"36-41",min:36,max:41},{id:"42-60",min:42,max:60}],X=(F||[]).filter(Boolean),Y=(H=[])=>[...H].sort((L,U)=>(Number(qJ(U))||0)-(Number(qJ(L))||0)).slice(0,3),Z={nacionalidades:[],profesiones:[],edades:[],items:[],caracteristicas:[]},$=Y(X);[...new Set(X.map((H)=>String(H.nacionalidad||"").trim()).filter(Boolean))].forEach((H)=>Z.nacionalidades.push({id:`nac-${H}`,title:`Nacionalidad · ${H}`,top:Y(X.filter((L)=>String(L.nacionalidad||"").trim()===H))}));J.forEach((H)=>Z.edades.push({id:`edad-${H.id}`,title:`Edad · ${H.id}`,top:Y(X.filter((L)=>{const U=bJ(L.fechaNacimiento);return typeof U==="number"&&U>=H.min&&U<=H.max}))}));[...new Set(X.map((H)=>String(H.profesion||"").trim()).filter(Boolean))].forEach((H)=>Z.profesiones.push({id:`prof-${H}`,title:`Profesión · ${H}`,top:Y(X.filter((L)=>String(L.profesion||"").trim()===H))}));aJ.forEach((H)=>{const L=[...X].sort((U,C)=>(Number(C?.puntuaciones?.[H])||0)-(Number(U?.puntuaciones?.[H])||0)).slice(0,3);Z.items.push({id:`item-${H}`,title:`Ítem · ${H}`,top:L,scoreType:"item",scoreKey:H})});[["Cuerpo",["Cuerpo","Cola","Pechos","Cintura","Piernas","Estatura"]],["Rostro",["Rostro","Ojos","Boca","Cabello"]],["Actitud",["Sensualidad","Carisma","Elegancia","Dulzura","Talento"]]].forEach(([H,L])=>{const U=[...X].map((C)=>({...C,__metaScore:L.reduce((z,B)=>z+(Number(C?.puntuaciones?.[B])||0),0)/L.length})).sort((C,z)=>(z.__metaScore||0)-(C.__metaScore||0)).slice(0,3);Z.caracteristicas.push({id:`meta-${H}`,title:H,top:U,scoreType:"meta"})});const q=[{id:"general",title:"Podio de puntuación general",cards:[{id:"general-score",title:"General · Ranking total",top:$}]},{id:"nacionalidades",title:"Podios por nacionalidades",cards:Z.nacionalidades},{id:"profesiones",title:"Podios por profesión",cards:Z.profesiones},{id:"edades",title:"Podios por edades",cards:Z.edades},{id:"items",title:"Podios por ítem",cards:Z.items},{id:"caracteristicas",title:"Podios por características",cards:Z.caracteristicas}],W=(H,L=!1)=>Q("article",{className:`champion-podium-card champion-podium-card--${L?"general":"section"} rounded-2xl p-5`,children:[Q("h3",{className:`champion-podium-title text-xs font-black uppercase tracking-[0.18em] mb-3 ${L?"text-[var(--metal-gold)]":"text-cyan-100"}`,children:H.title},void 0,!1,void 0,this),Q("ol",{className:"space-y-2",children:H.top.length?H.top.map((U,C)=>{const z=ZJ(String(U?.fotos?.[0]||"").trim(),""),B=C===0;return Q("li",{className:`champion-rank-row champion-rank-row--${C+1} flex items-center justify-between gap-3 text-xs`,children:[Q("div",{className:"flex items-center gap-2 min-w-0",children:[B&&z&&Q("div",{className:"flex flex-col items-center shrink-0 -mt-1",title:`Campeona de ${H.title}`,children:[Q("span",{className:"text-[12px] leading-none -mb-0.5","aria-hidden":"true",children:"\uD83D\uDC51"},void 0,!1,void 0,this),Q("img",{src:z,alt:`Miniatura de ${U.nombre||"Campeona"}`,className:`champion-avatar w-8 h-8 rounded-full object-cover border ${L?"champion-avatar--general":"champion-avatar--section"}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("span",{className:`champion-rank-name font-black truncate ${B?"champion-rank-name--winner":"text-slate-100"}`,children:[C+1,". ",U.nombre||"Sin nombre"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("span",{className:`champion-score font-black shrink-0 ${C===0?"champion-score--winner":""}`,children:qJ(U)},void 0,!1,void 0,this)]},`${H.id}-${U.firebaseId||U.nombre||C}`,!0,void 0,this)}):Q("li",{className:"text-xs text-slate-400",children:"Sin datos suficientes."},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},H.id,!0,void 0,this);return Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Campeonas"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Podios organizados por secciones"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-7",children:q.map((H)=>Q("section",{className:"space-y-3",children:[Q("h3",{className:"text-[11px] font-black uppercase tracking-[0.2em] text-cyan-100/85",children:H.title},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:H.cards.map((L)=>W(L,H.id==="general"))},void 0,!1,void 0,this)]},H.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),V==="anonimo"&&!QJ&&Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:Q("section",{className:"hud-frame hud-frame--panel profession-banner p-8 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.35em] text-cyan-200/80 font-black",children:"Modo"},void 0,!1,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-5xl md:text-6xl font-black italic text-white tracking-[0.08em] leading-none mt-3",children:"ánonimo"},void 0,!1,void 0,this),Q("p",{className:"text-sm md:text-base text-slate-200/85 mt-4 max-w-3xl",children:"Este panel reutiliza el estilo visual del sistema y no abre la ficha de personaje para mantener una navegación discreta."},void 0,!1,void 0,this),Q("div",{className:"mt-8 space-y-5",children:[Q("div",{className:"grid gap-3 sm:grid-cols-3",children:[{key:"imagen",label:"Imagen"},{key:"escena",label:"Escena"},{key:"audio",label:"Audio"}].map((J)=>Q("button",{type:"button",onClick:()=>{gZ(J.key);uQ("");uJ("")},className:`px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] transition-all border ${PJ===J.key?"text-cyan-100 border-cyan-300/50 bg-cyan-500/35":"text-slate-200 border-slate-500/50 bg-slate-700/30 hover:bg-slate-600/35"}`,children:J.label},J.key,!1,void 0,this))},void 0,!1,void 0,this),(PJ==="imagen"||PJ==="escena")&&Q("div",{className:"grid gap-4 md:grid-cols-2",children:[Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:TX,onChange:(J)=>{AY(J.target.value);uQ("")},children:[Q("option",{value:"url",children:"URL"},void 0,!1,void 0,this),Q("option",{value:"file",children:"Archivo de dispositivo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:KY,onChange:(J)=>IZ(J.target.value),children:XJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),TX==="url"?Q("input",{placeholder:"URL",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:zY,onChange:(J)=>NY(J.target.value)},void 0,!1,void 0,this):Q("input",{type:"file",accept:PJ==="imagen"?"image/*,.gif":"image/*,video/*,.gif",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",onChange:(J)=>MY(J.target.files?.[0]||null)},void 0,!1,void 0,this),Q("input",{placeholder:"Autor (opcional)",className:"md:col-span-2 theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold",value:wY,onChange:(J)=>kY(J.target.value)},void 0,!1,void 0,this),Q("button",{type:"button",onClick:async()=>{await Q0(PJ==="escena"?"videos":"fotos")},className:"md:col-span-2 px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:["Guardar ",PJ]},void 0,!0,void 0,this),GY&&Q("p",{className:"md:col-span-2 text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:GY},void 0,!1,void 0,this)]},void 0,!0,void 0,this),PJ==="audio"&&Q("div",{className:"border-t border-cyan-300/25 pt-4 mt-2 space-y-3",children:[Q("p",{className:"text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 font-black",children:"Audio para botón \uD83C\uDFB5"},void 0,!1,void 0,this),Q("input",{placeholder:"Nombre",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:SY,onChange:(J)=>xY(J.target.value)},void 0,!1,void 0,this),Q("select",{className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:fQ,onChange:(J)=>PY(J.target.value),children:[Q("option",{value:"url",children:"URL"},void 0,!1,void 0,this),Q("option",{value:"file",children:"Archivo de dispositivo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),fQ==="url"?Q("input",{placeholder:"URL",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",value:bY,onChange:(J)=>vY(J.target.value)},void 0,!1,void 0,this):Q("input",{type:"file",accept:"audio/*",className:"theme-surface-soft border theme-border-secondary p-3 rounded-xl outline-none text-white font-bold w-full",onChange:(J)=>gY(J.target.files?.[0]||null)},void 0,!1,void 0,this),Q("button",{type:"button",onClick:X0,className:"px-5 py-3 rounded-xl font-black uppercase tracking-[0.14em] text-cyan-100 border border-cyan-300/50 bg-cyan-500/20 hover:bg-cyan-500/35 transition-all",children:"Guardar audio en Firebase"},void 0,!1,void 0,this),hY?Q("p",{className:"text-xs font-black uppercase tracking-[0.12em] text-rose-300",children:hY},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),V==="EXPLORAR"&&!QJ&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--cyan text-4xl font-black italic text-white uppercase tracking-tighter",children:"Explorar"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:"Organización automática por profesión"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:[...new Set((F||[]).map((J)=>String(J?.profesion||"").trim()).filter(Boolean))].map((J)=>{const X=(F||[]).filter((Z)=>String(Z?.profesion||"").trim()===J).length,Y=xQ(J);return Q("div",{onClick:()=>UQ(J),className:"profession-folder-card rounded-2xl p-8 text-center cursor-pointer transition-all group relative overflow-hidden active:scale-95",style:{"--folder-color":Y.baseColor,"--folder-glow":Y.glowColor},children:[Q("div",{className:"profession-folder-card__icon w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl mx-auto mb-6",children:O1(J)},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black text-white mb-2 truncate uppercase tracking-tighter italic",children:J},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 px-5 py-2 rounded-full border",style:{borderColor:"color-mix(in srgb, var(--folder-color) 65%, rgba(2,6,23,0.8) 35%)",background:"color-mix(in srgb, var(--folder-color) 14%, rgba(2,6,23,0.68) 86%)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px color-mix(in srgb, var(--folder-glow) 35%, transparent)"},children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[X," ",X===1?"Perfil":"Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},J,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),QJ&&Q("div",{className:"space-y-8 animate-in slide-in-from-bottom-4 duration-500",children:[Q("div",{className:"hud-frame hud-frame--panel profession-banner flex items-center justify-between p-6 rounded-2xl gothic-frame gothic-frame--ornate gothic-frame--grand",style:{"--banner-color":V==="CATEGORIAS"?"rgba(148, 163, 184, 0.8)":xQ(QJ).baseColor},children:[Q("div",{className:"flex items-center gap-3",children:[Q("button",{onClick:()=>UQ(null),className:"group flex items-center","aria-label":"Volver",title:"Volver",children:Q("div",{className:"back-btn-silver p-2 rounded-xl text-slate-400 group-hover:text-slate-200 transition-all",children:Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>cY(V==="CATEGORIAS"?"":QJ),className:"w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl leading-none flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all","aria-label":"Agregar nuevo perfil",title:"Agregar nuevo perfil",children:"+"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("h2",{className:"neon-sign neon-sign--magenta font-title text-6xl font-black italic text-white tracking-[0.08em] leading-none",children:V==="CATEGORIAS"?k.find((J)=>J.firebaseId===QJ)?.label||"Archivo del Reino":QJ},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",children:(F||[]).filter((J)=>{if(!J)return!1;if(V==="CATEGORIAS")return QX(J).includes(QJ);return String(J.profesion||"").trim().toLowerCase()===String(QJ).trim().toLowerCase()}).map((J)=>{const X=Number(typeof qJ==="function"?qJ(J):0)||0,Y=X>=95?"card-score-badge--gold":X>=86?"card-score-badge--diamond":X>=75?"card-score-badge--fire":"",Z=JJ(J.profesion);return Q("div",{onClick:()=>{EQ(null);TY("");fJ(J.firebaseId||"")},onContextMenu:($)=>w0($,J),className:"profile-card group relative rounded-2xl overflow-hidden cursor-pointer",style:{"--card-neon-color":Z.color,"--card-neon-glow":Z.sombra},children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[Q("img",{src:ZJ(J.fotos&&J.fotos.length>0?J.fotos[0]:"","https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:wJ},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 left-3 z-20",children:[Q("button",{type:"button",onClick:($)=>{$.stopPropagation();vQ("");FQ(J);EQ((j)=>j===J.firebaseId?null:J.firebaseId)},className:"card-menu-btn rounded-full bg-slate-900/88 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:border-[var(--metal-gold)] transition-all flex items-center justify-center","aria-label":"Abrir menú contextual del perfil",children:Q(p,{name:"more-vertical",size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),kZ===J.firebaseId&&Q("div",{className:"absolute top-12 left-0 min-w-[170px] rounded-xl border theme-border-secondary bg-slate-950/95 shadow-2xl p-2 space-y-1",onClick:($)=>$.stopPropagation(),children:[Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-slate-200 hover:bg-slate-800 transition-all",onClick:()=>{EQ(null);oQ(J)},children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",className:"w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] text-red-300 hover:bg-red-500/20 transition-all",onClick:()=>{uX(J);EQ(null)},children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:($)=>{$.stopPropagation();gQ({isOpen:!0,profile:J})},className:`card-score-badge ${Y} absolute top-2 right-2 w-14 h-14 backdrop-blur-md rounded-full flex flex-col items-center justify-center border`,title:`Puntaje de ${J.nombre}`,children:[X>=75&&X<=85&&Q("span",{className:"card-score-badge__fire-emoji","aria-hidden":"true",children:"\uD83D\uDD25"},void 0,!1,void 0,this),Q("span",{className:"text-[9px] font-black text-[var(--metal-gold)] leading-none",children:"G2"},void 0,!1,void 0,this),Q("span",{className:"card-score-badge__value text-lg font-black",children:typeof qJ==="function"?qJ(J):"8.5"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-4 left-4 right-4",children:Q("div",{className:"text-bubble card-footer-profession w-full backdrop-blur-md p-4 rounded-2xl border",children:[Q("h3",{className:"text-lg font-black text-white italic tracking-tighter leading-none flex items-center gap-2",children:[J.nombre,Q("span",{className:"text-[var(--metal-gold)] text-sm not-italic",children:["(",typeof bJ==="function"?bJ(J.fechaNacimiento):"??",")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-between items-center mt-1",children:[Q("span",{className:"text-[var(--metal-gold)] text-[7px] font-black uppercase tracking-widest",children:J.profesion},void 0,!1,void 0,this),Q("p",{className:"text-[7px] font-bold text-slate-400 uppercase",children:J.nacionalidad},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.firebaseId||Math.random(),!1,void 0,this)})},void 0,!1,void 0,this),LX&&UJ&&Q("div",{ref:T,className:"fixed z-[120] min-w-[11rem] rounded-xl border border-cyan-400/40 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.55)] p-2",style:{top:`${jY.y}px`,left:`${jY.x}px`},children:[Q("button",{type:"button",onClick:k0,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-cyan-200 hover:bg-cyan-500/20 transition-colors",children:"Editar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:G0,className:"w-full text-left px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-rose-300 hover:bg-rose-500/20 transition-colors",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),V==="GALERIA"&&!QJ&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6",children:[Q("div",{children:[Q("h2",{className:"neon-sign neon-sign--magenta text-4xl font-black italic text-white uppercase tracking-tighter",children:"Galería"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:`Vista por ${XX} · ${B0}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:[p0.map((J)=>Q("button",{type:"button",onClick:()=>PZ(J),className:`btn-metal px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all ${g===J?"btn-metal--gold text-[#fffaf0]":"btn-metal--silver text-slate-900"}`,children:EZ[J]},J,!1,void 0,this)),Q("button",{type:"button",onClick:()=>wX(!0),className:"btn-metal btn-metal--danger px-4 py-2 rounded-full text-[10px] tracking-[0.08em] inline-flex items-center gap-2",title:"Ver y corregir fotos rotas",children:[Q("span",{className:"text-sm leading-none",children:"\uD83D\uDC94"},void 0,!1,void 0,this),"Rotas (",MJ.length,")"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:[Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Total"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:zQ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Visibles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-[var(--metal-gold)] mt-1",children:y.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Etiquetas"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:XJ.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"theme-surface-soft gothic-frame gothic-frame--secondary rounded-[1.8rem] px-5 py-4",children:[Q("p",{className:"text-[9px] font-black uppercase tracking-[0.25em] text-slate-500",children:"Perfiles"},void 0,!1,void 0,this),Q("p",{className:"text-2xl font-black italic text-white mt-1",children:$0},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),g!=="PERSONAJE"&&YX&&!dJ?Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:vJ.map((J)=>Q("button",{type:"button",onClick:()=>{DQ(J);o(null)},className:"group text-left theme-surface-card border theme-border-secondary rounded-[1.4rem] overflow-hidden hover:border-[color:color-mix(in_srgb,var(--metal-gold)_40%,transparent)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500",children:Q("div",{className:"aspect-[4/5] bg-slate-950 relative overflow-hidden",children:[J.fotoPerfil?Q("img",{src:ZJ(J.fotoPerfil,"https://via.placeholder.com/400x500"),alt:`Portada ${J.nombre}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100",onError:wJ},void 0,!1,void 0,this):Q("div",{className:"w-full h-full flex items-center justify-center text-slate-500",children:Q(p,{name:"image-off",size:34},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-5",children:[Q("p",{className:"text-xl font-black italic text-white tracking-tighter leading-none",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--metal-gold)] mt-2",children:J.profesion||"Perfil"},void 0,!1,void 0,this),Q("div",{className:"mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border theme-border-secondary bg-slate-950/85 text-[9px] font-black uppercase tracking-[0.2em] text-slate-200",children:[J.photos.length," archivos"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this))},void 0,!1,void 0,this):Q(kJ,{children:[g!=="PERSONAJE"&&YX&&Q("div",{className:"flex items-center gap-3",children:Q("button",{type:"button",onClick:()=>{DQ(null);o(null)},className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900",children:[Q(p,{name:"arrow-left",size:14},void 0,!1,void 0,this),"Volver al índice"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),g==="PERSONAJE"&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-col lg:flex-row lg:items-center gap-3",children:[Q("label",{htmlFor:"galleryCharacterSelector",className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:"Selector de personajes"},void 0,!1,void 0,this),Q("select",{id:"galleryCharacterSelector",className:"filter-select max-w-lg",value:"",onChange:(J)=>O0(J.target.value),children:[Q("option",{value:"",disabled:!0,children:tY.length?"Seleccionar personaje…":"No hay más personajes disponibles"},void 0,!1,void 0,this),tY.map((J)=>Q("option",{value:J.id,children:[J.nombre," · ",J.photos.length," archivos"]},J.id,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),NJ.length>0?Q("div",{className:"flex flex-wrap gap-2",children:NJ.map((J)=>Q("button",{type:"button",onClick:()=>L0(J.id),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] text-slate-900",title:"Quitar personaje de la galería visible",children:[J.nombre,Q(p,{name:"x",size:12},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-slate-400",children:"Seleccioná uno o más personajes para mostrar su multimedia en la galería."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),g==="ETIQUETA"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:XJ.map((J)=>Q("button",{onClick:()=>E0(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:OX(J,eJ.includes(J)),children:[J," · ",(hX[J]||[]).length]},J,!0,void 0,this))},void 0,!1,void 0,this),g==="PERSONAJE"&&Q("div",{className:"hud-frame hud-frame--panel flex flex-wrap gap-3 rounded-2xl p-4",children:[Q("button",{onClick:()=>VX("INICIAL"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:OX("INICIAL",SJ==="INICIAL"),children:"Inicial"},void 0,!1,void 0,this),XJ.map((J)=>{return Q("button",{onClick:()=>VX(J),className:"btn-neon font-title px-4 py-2 rounded-full text-[10px] tracking-[0.08em] transition-all",style:OX(J,SJ===J),children:[J," · ",H0[J]||0]},J,!0,void 0,this)}),Q("button",{onClick:()=>VX("100"),className:"btn-neon px-4 py-2 rounded-full text-[10px] transition-all",style:OX("100",SJ==="100"),children:"100%"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{type:"button",onClick:()=>rY(0,{autoplay:!0,fromGeneralPlay:!0}),disabled:!y.length,className:"btn-metal btn-metal--gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] disabled:opacity-40 disabled:cursor-not-allowed",children:[Q(p,{name:"play",size:14},void 0,!1,void 0,this),"Play ",dJ?.nombre||XX]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:F0,disabled:EY||!y.length,className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-5 py-3 rounded-full text-[10px] text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed",title:"Descargar toda la multimedia visible en un ZIP",children:[Q(p,{name:"download",size:14},void 0,!1,void 0,this),EY?"Generando ZIP...":"DESCARGAR TODO"]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>yZ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${zX?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,title:"Música de galería",children:"\uD83C\uDFB5"},void 0,!1,void 0,this),QQ.length>0&&Q(kJ,{children:[Q("select",{className:"filter-select min-w-[180px]",value:NX,onChange:(J)=>mZ(J.target.value),children:[Q("option",{value:"",children:"Audio principal"},void 0,!1,void 0,this),QQ.map((J,X)=>Q("option",{value:J.url,children:J.nombre},`${J.url}-${X}`,!1,void 0,this))]},void 0,!0,void 0,this),Q("select",{className:"filter-select min-w-[180px]",value:MX,onChange:(J)=>uZ(J.target.value),children:[Q("option",{value:"",children:"Audio secundario (opcional)"},void 0,!1,void 0,this),QQ.map((J,X)=>Q("option",{value:J.url,children:J.nombre},`${J.url}-b-${X}`,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"inline-flex items-center gap-2 rounded-full border theme-border-secondary bg-slate-950/80 px-3 py-2",children:[Q("label",{htmlFor:"galleryPlaybackSeconds",className:"text-[10px] font-black uppercase tracking-[0.15em] text-slate-300",children:"Duración"},void 0,!1,void 0,this),Q("select",{id:"galleryPlaybackSeconds",className:"filter-select",value:RX,onChange:(J)=>bZ(Number(J.target.value)),children:[3,5,7,10].map((J)=>Q("option",{value:J,children:[J," segundos"]},J,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),y.length===0?Q("div",{className:"py-24 border border-dashed theme-border-secondary rounded-2xl text-center bg-slate-950/30",children:[Q("div",{className:"w-20 h-20 rounded-full bg-slate-900 border theme-border-secondary flex items-center justify-center mx-auto mb-6",children:Q(p,{name:"image-off",size:28,className:"text-slate-600"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"font-title text-xl font-black italic text-white tracking-[0.06em]",children:"No hay archivos para mostrar"},void 0,!1,void 0,this),Q("p",{className:"font-title text-xs font-medium text-slate-500 tracking-[0.06em] mt-3",children:g==="ETIQUETA"&&eJ.length===0?"Seleccioná una o más etiquetas para ver multimedia.":"Probá con otra etiqueta o quitá el filtro por etiqueta."},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q(kJ,{children:[Q("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:yX.map((J,X)=>{const Y=lJ(J.label),Z=xQ(J.profesion);return Q("button",{type:"button",onClick:()=>rY(X),className:"group text-left theme-surface-card border rounded-[1.4rem] overflow-hidden transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[var(--glow-gold)] focus:ring-offset-2 focus:ring-offset-[#020617]",style:{borderColor:`color-mix(in srgb, ${Z.glowColor} 72%, rgba(148,163,184,0.48) 28%)`,boxShadow:`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${Z.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${Z.glowColor} 35%, transparent)`},onMouseEnter:($)=>{$.currentTarget.style.transform="translateY(-2px) scale(1.01)";$.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 20%, transparent), 0 0 26px color-mix(in srgb, ${Z.glowColor} 76%, transparent), 0 0 58px color-mix(in srgb, ${Z.glowColor} 52%, transparent)`},onMouseLeave:($)=>{$.currentTarget.style.transform="translateY(0) scale(1)";$.currentTarget.style.boxShadow=`inset 0 -30px 70px color-mix(in srgb, ${Z.baseColor} 18%, transparent), 0 0 16px color-mix(in srgb, ${Z.glowColor} 58%, transparent), 0 0 34px color-mix(in srgb, ${Z.glowColor} 35%, transparent)`},children:Q("div",{className:"aspect-[3/4] relative overflow-hidden bg-slate-950",children:[J.type==="video"?(()=>{const $=jQ(J.url);if($)return Q("div",{className:"w-full h-full bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.3),_rgba(15,23,42,0.95))] flex flex-col items-center justify-center gap-4 p-6 text-center",children:[Q("div",{className:"w-16 h-16 rounded-full border border-[var(--metal-gold)]/40 bg-slate-950/70 flex items-center justify-center text-[color:color-mix(in_srgb,var(--metal-gold)_72%,white)] text-2xl",children:"▶"},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title text-sm font-semibold tracking-[0.1em] text-white",children:"Video"},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.08em] text-slate-400 mt-2",children:$.provider},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);return Q("video",{src:J.url,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",muted:!0,playsInline:!0,preload:"none"},void 0,!1,void 0,this)})():Q("img",{src:ZJ(J.url,qQ),alt:`${J.nombre} - ${J.label||"galería"}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:wJ,loading:"lazy",decoding:"async"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent"},void 0,!1,void 0,this),Q("div",{className:"absolute top-3 right-3 min-w-[32px] h-[32px] px-2 rounded-xl border flex items-center justify-center text-[10px] font-black uppercase shadow-xl z-20",style:{background:Y.bg,borderColor:Y.border,color:Y.text,boxShadow:`0 0 10px ${Y.glow}, 0 0 24px color-mix(in srgb, ${Y.glow} 48%, transparent)`},title:`Etiqueta ${J.label||"sin etiqueta"}`,children:J.label||"—"},void 0,!1,void 0,this),Q("div",{className:"absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent",children:Q("div",{className:"flex items-end justify-between gap-3",children:[Q("div",{className:"min-w-0 flex-1",children:[Q("p",{className:"text-xs sm:text-sm font-black italic text-white tracking-tight leading-none truncate",title:J.nombre,children:J.nombre},void 0,!1,void 0,this),J.autor?Q("p",{className:"text-[10px] font-semibold text-slate-300 mt-1 truncate",title:J.autor,children:["Autor: ",J.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"px-2 py-[2px] rounded-full border theme-border-secondary bg-slate-950/85 text-[7px] font-black uppercase tracking-[0.18em] text-slate-200 shrink-0",children:J.type==="video"?"VIDEO":J.isGif?"GIF":"IMG"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},J.id,!1,void 0,this)})},void 0,!1,void 0,this),j0&&Q("div",{className:"flex justify-center mt-8",children:Q("button",{type:"button",onClick:()=>LY((J)=>J+20),className:"btn-metal btn-metal--silver inline-flex items-center gap-2 px-6 py-3 rounded-full text-[10px] text-slate-900",children:["Cargar más (",yX.length,"/",y.length,")"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("audio",{ref:TQ,loop:!0,preload:"none"},void 0,!1,void 0,this),Q("audio",{ref:AQ,loop:!0,preload:"none"},void 0,!1,void 0,this),w&&Q("div",{ref:nQ,className:"gallery-viewer-overlay fixed top-0 bottom-0 z-[260] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-0",style:BJ?{left:"18rem",width:"calc(100vw - 18rem)"}:{left:0,width:"100vw"},onClick:eY,children:[Q("button",{type:"button",onClick:eY,className:`btn-metal btn-metal--danger absolute ${zJ?"top-2 right-2 sm:top-3 sm:right-3 w-10 h-10":"top-4 right-4 sm:top-6 sm:right-6 w-12 h-12"} rounded-full flex items-center justify-center`,"aria-label":"Cerrar visor",children:Q("span",{className:"text-[26px] leading-none font-black",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:`gallery-viewer-shell w-screen h-screen max-h-screen flex flex-col ${zJ?"gap-1 px-1 py-1 sm:px-2 sm:py-2":"gap-4 px-3 py-3 sm:px-6 sm:py-6"}`,onClick:(J)=>J.stopPropagation(),children:[!zJ&&Q("div",{className:"flex items-center justify-between gap-4 px-1 sm:px-2",children:[Q("div",{children:[Q("p",{className:"text-2xl sm:text-3xl font-black italic text-white tracking-tighter",children:w.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[var(--metal-gold)] mt-2",children:[w.profesion,w.nacionalidad?` · ${w.nacionalidad}`:""]},void 0,!0,void 0,this),w.autor?Q("p",{className:"text-[11px] sm:text-xs font-semibold text-slate-300 mt-2",children:["Autor: ",w.autor]},void 0,!0,void 0,this):null]},void 0,!0,void 0,this),Q("div",{className:"flex items-center gap-3",children:[y.length>1&&Q(kJ,{children:[Q("button",{type:"button",onClick:()=>RQ((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${AJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":AJ?"Pausar reproducción":"Reproducir",children:"▶️"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>CX((J)=>!J),className:`w-12 h-12 rounded-full border flex items-center justify-center text-2xl transition-all shadow-lg shadow-black/40 ${xJ?"border-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_35%,rgba(2,6,23,0.9))] brightness-110":"theme-border-secondary bg-slate-900/85 opacity-80"}`,"aria-label":xJ?"Aleatorio activado":"Aleatorio desactivado",children:"\uD83D\uDD00"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"px-3 py-2 rounded-full border theme-border-secondary bg-slate-950/85 text-[10px] font-black uppercase tracking-[0.3em] text-slate-200",children:w.type==="video"?"VIDEO":w.isGif?"GIF":"IMG"},void 0,!1,void 0,this),Q("div",{className:"min-w-[52px] h-[52px] rounded-2xl border flex items-center justify-center text-base font-black uppercase shadow-xl",style:{background:lJ(w.label).bg,borderColor:lJ(w.label).border,color:lJ(w.label).text,boxShadow:`0 0 20px ${lJ(w.label).glow}`},children:w.label||"—"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:`gallery-viewer-media-wrap relative flex-1 min-h-0 overflow-hidden bg-black/50 ${zJ?"rounded-xl md:rounded-2xl":"md:rounded-[2rem] md:border theme-border-secondary"}`,children:[w.type==="video"?(()=>{const J=jQ(w.url);if(J)return Q("iframe",{ref:SX,src:J.src,title:`${w.nombre} video`,className:`w-full ${zJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} bg-black`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0},void 0,!1,void 0,this);return Q("video",{ref:SX,src:w.url,controls:!0,playsInline:!0,muted:mX,autoPlay:AJ,onEnded:()=>{if(AJ&&y.length>1)NQ()},onError:()=>{if(y.length>1)NQ()},className:`w-full ${zJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`},void 0,!1,void 0,this)})():Q("img",{src:ZJ(w.url,qQ),alt:`${w.nombre} - ${w.label||"galería"}`,ref:SX,className:`w-full ${zJ?"h-[calc(100dvh-4.5rem)]":"h-[calc(100dvh-14rem)]"} object-contain bg-black`,onError:(J)=>{wJ(J);if(y.length>1)NQ()}},void 0,!1,void 0,this),y.length>1&&Q(kJ,{children:zJ?Q("div",{className:"absolute left-1/2 bottom-3 sm:bottom-4 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_40%,rgba(148,163,184,0.45))] bg-slate-950/85 backdrop-blur-md shadow-[0_0_18px_rgba(15,23,42,0.65)]",children:[Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();CX((X)=>!X)},className:`px-3 sm:px-4 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${xJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":xJ?"Aleatorio activado":"Aleatorio desactivado",children:xJ?"Random On":"Random Off"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();RQ((X)=>!X)},className:`px-4 sm:px-5 h-10 rounded-full border text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] transition-all ${AJ?"border-[var(--metal-gold)] text-[var(--metal-gold)] bg-[color:color-mix(in_srgb,var(--metal-gold)_28%,rgba(2,6,23,0.9))]":"theme-border-secondary text-slate-200 bg-slate-900/90"}`,"aria-label":AJ?"Pausar reproducción":"Reproducir",children:AJ?"Pause":"Play"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();NQ()},className:"w-10 h-10 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q("button",{type:"button",onClick:(J)=>{J.stopPropagation();NQ()},className:"absolute right-4 bottom-4 sm:right-6 sm:bottom-6 w-12 h-12 rounded-full border theme-border-secondary bg-slate-900/90 text-white flex items-center justify-center hover:border-[var(--metal-gold)] transition-all shadow-lg shadow-black/40 text-2xl","aria-label":"Foto siguiente",children:"➡️"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!zJ&&Q("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 sm:px-2",children:[Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400",children:[RJ+1," de ",y.length," archivos visibles"]},void 0,!0,void 0,this),Q("div",{className:"flex items-center justify-start sm:justify-end gap-2",children:[UY?Q(kJ,{children:[Q("input",{type:"url",value:DY,onChange:(J)=>mQ(J.target.value),placeholder:"https://...",className:"min-w-[260px] bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold tracking-[0.04em] text-white focus:outline-none focus:border-[var(--metal-gold)]"},void 0,!1,void 0,this),Q("select",{value:VY,onChange:(J)=>yQ(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white focus:outline-none focus:border-[var(--metal-gold)]",children:[Q("option",{value:"",children:"Sin etiqueta"},void 0,!1,void 0,this),XJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:U0,disabled:RY,className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--metal-gold)] hover:border-[var(--metal-gold)] transition-all",children:RY?"Guardando...":"Guardar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>{yQ(w?.label||"");mQ(w?.url||"");mJ("");JQ(!1)},className:"px-2 py-1 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-all",children:"Cancelar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Q("button",{type:"button",onClick:()=>JQ(!0),className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border theme-border-secondary bg-slate-900 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 hover:border-[var(--metal-gold)] hover:text-[var(--metal-gold)] transition-all","aria-label":"Editar etiqueta de la multimedia",children:[Q("span",{className:"text-xs leading-none",children:"✏️"},void 0,!1,void 0,this),Q("span",{children:w?.label||"Sin etiqueta"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),UY&&CY&&Q("p",{className:"text-[10px] font-bold tracking-[0.04em] text-rose-300",children:CY},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),KX&&Q("div",{className:"fixed inset-0 z-[130] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6",style:BJ?{left:"18rem"}:void 0,onClick:()=>wX(!1),children:Q("div",{className:"w-full max-w-[1200px] max-h-full theme-surface-card border theme-border-secondary rounded-[2rem] p-4 sm:p-6 overflow-hidden",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"flex items-center justify-between gap-4 mb-5",children:[Q("div",{children:[Q("p",{className:"text-2xl font-black italic text-white tracking-tighter",children:"Fotos rotas"},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.25em] text-[var(--metal-gold)] mt-2",children:[MJ.length," enlace",MJ.length===1?"":"s"," sin vista"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>wX(!1),className:"btn-metal btn-metal--danger w-11 h-11 rounded-full flex items-center justify-center","aria-label":"Cerrar revisión de fotos rotas",children:Q("span",{className:"text-xl font-black leading-none",children:"✕"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"max-h-[70vh] overflow-y-auto pr-1 space-y-6",children:!oY.length?Q("div",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-6 text-center",children:Q("p",{className:"text-sm font-semibold text-white",children:"No se detectaron fotos rotas ahora mismo."},void 0,!1,void 0,this)},void 0,!1,void 0,this):oY.map((J)=>Q("section",{className:"theme-surface-soft rounded-2xl border theme-border-secondary p-4 sm:p-5",children:[Q("div",{className:"mb-4",children:[Q("p",{className:"text-lg font-black italic text-white tracking-tight",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mt-1",children:[J.profesion,J.nacionalidad?` · ${J.nacionalidad}`:""]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-3",children:J.fotos.map((X)=>{const Y=!!sZ[X.id],Z=!!dZ[X.id],$=GX[X.id]??X.url;return Q("article",{className:"grid grid-cols-1 xl:grid-cols-[76px_minmax(0,1fr)_auto] gap-3 p-3 rounded-xl border theme-border-secondary bg-slate-950/40",children:[Q("div",{className:"w-[76px] h-[76px] rounded-lg overflow-hidden border theme-border-secondary bg-slate-900 flex items-center justify-center",children:Q("img",{src:qQ,alt:"Vista previa rota",className:"w-full h-full object-cover"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"space-y-2 min-w-0",children:[Q("div",{className:"flex flex-wrap items-center gap-2",children:[Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-200",children:["Etiqueta: ",X.label||"Sin etiqueta"]},void 0,!0,void 0,this),Q("span",{className:"text-[10px] px-2 py-1 rounded-full border theme-border-secondary bg-slate-900/85 font-black uppercase tracking-[0.16em] text-slate-400",children:X.sourceTag},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"url",value:$,onChange:(j)=>V0(X.id,j.target.value),placeholder:"https://...",readOnly:!Z,className:`w-full min-w-0 bg-slate-900 border theme-border-secondary rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[var(--metal-gold)] ${!Z?"opacity-80 cursor-default":""}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap xl:flex-col gap-2 xl:justify-center",children:[Q("button",{type:"button",onClick:()=>D0(X),className:"btn-metal btn-metal--silver px-3 py-2 rounded-xl text-[10px]",children:"Ir al enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>JZ(X.id,!0),disabled:Y,className:"btn-metal px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Editar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>C0(X),disabled:Y,className:"btn-metal btn-metal--gold px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Guardar enlace"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:()=>R0(X),disabled:Y,className:"btn-metal btn-metal--danger px-3 py-2 rounded-xl text-[10px] disabled:opacity-60",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},X.id,!0,void 0,this)})},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),V==="BATALLAS"&&!QJ&&!N&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex flex-col gap-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:I0,className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear calificaciones"},void 0,!1,void 0,this),Q("button",{onClick:()=>NZ((J)=>!J),className:"solid-metal-ui px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all",children:"Resetear item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),zZ&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 flex flex-wrap items-center gap-3",children:[Q("select",{value:XY,onChange:(J)=>MZ(J.target.value),className:"bg-slate-900 border theme-border-secondary rounded-xl px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white",children:eX.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("button",{onClick:()=>g0(XY,S,d),className:"solid-metal-ui px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",disabled:!S,children:"Confirmar reset item"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{children:[Q("h2",{className:"text-4xl font-black italic text-white uppercase tracking-tighter",children:"Arenas"},void 0,!1,void 0,this),Q("p",{className:"text-xs font-bold text-[var(--metal-gold)] uppercase tracking-widest mt-1",children:!S?"Paso 1: elegí un modo de enfrentamiento":jX&&!d?`Paso 2: elegí una opción de ${_Q(S)}`:`Paso 3: elegí uno de los 15 ítems · Modo: ${_Q(S)}`},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!S&&Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6",children:JY.map((J)=>Q("button",{onClick:()=>{EJ(J.id);rJ(J.id==="GENERAL"?"all":"");s(null)},className:"solid-metal-ui battle-mode-card battle-mode-card--mode border rounded-2xl p-4 text-left transition-all",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.28em] text-slate-500",children:"Modo"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J.label},void 0,!1,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-2",children:J.description},void 0,!1,void 0,this)]},J.id,!0,void 0,this))},void 0,!1,void 0,this),S&&Q("div",{className:"space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-300",children:["Modo: ",_Q(S)]},void 0,!0,void 0,this),Q("button",{onClick:()=>{EJ(null);rJ("");s(null)},className:"solid-metal-ui inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.16em] transition-all",children:"Cambiar modo"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),jX&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-4 space-y-3",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-300",children:["Elegí una opción de ",_Q(S)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:y0.map((J)=>Q("button",{onClick:()=>{rJ(J.key);s(null)},className:`solid-metal-ui px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all ${d===J.key?"border-[var(--metal-gold)] text-white":"theme-border-secondary text-slate-200"}`,children:[J.label," ",Q("span",{className:"text-slate-400",children:["(",J.ids.length,")"]},void 0,!0,void 0,this)]},J.key,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),jX&&!d&&Q("p",{className:"text-xs text-slate-400",children:"Seleccioná una opción para habilitar las batallas."},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:[eX.map((J)=>{const X=WQ(J,S,d),Y=Boolean($J?.[X]?.isFinished);return Q("button",{disabled:jX&&!d,onClick:()=>{s(J);if(!$J[X])qZ(J,S,d)},className:`solid-metal-ui battle-mode-card battle-mode-card--arena border rounded-2xl p-4 text-left transition-all disabled:opacity-45 disabled:cursor-not-allowed ${Y?"battle-mode-card--completed":""}`,children:[Q("p",{className:`text-[10px] font-black uppercase tracking-[0.28em] ${Y?"text-emerald-100/90":"text-slate-500"}`,children:"Item"},void 0,!1,void 0,this),Q("h3",{className:"font-black italic text-white mt-2",children:J},void 0,!1,void 0,this),Y&&Q("p",{className:"battle-mode-card__status mt-4",children:"Completada"},void 0,!1,void 0,this)]},J,!0,void 0,this)}),"                    "]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),V==="BATALLAS"&&N&&(()=>{const J=WQ(N,S,d),X=$J[J],Y=F.find((E)=>E.firebaseId===X?.championId),Z=F.find((E)=>E.firebaseId===X?.challengerId),$=Y?$Z(N,Y.firebaseId):null,j=Z?$Z(N,Z.firebaseId):null;return Q("div",{className:"space-y-8 animate-in fade-in duration-500",children:[Q("div",{className:"bg-slate-900/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border theme-border-secondary space-y-4",children:[Q("div",{className:"flex flex-wrap items-center gap-3",children:[Q("button",{onClick:()=>s(null),className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"arrow-left",className:"w-4 h-4"},void 0,!1,void 0,this),"Volver a arenas"]},void 0,!0,void 0,this),Q("button",{onClick:()=>{s(null);EJ(null);rJ("")},className:"group solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:[Q("i",{"data-lucide":"refresh-ccw",className:"w-4 h-4"},void 0,!1,void 0,this),"Cambiar modo"]},void 0,!0,void 0,this),Q("button",{onClick:()=>wZ((E)=>!E),className:"solid-metal-ui inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.16em] transition-all",children:"Resetear una batalla"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),KZ&&Q("div",{className:"theme-surface-card border border-red-400/30 rounded-2xl p-4 mt-3",children:(()=>{const E=Object.keys(X?.matchups||{}).filter((q)=>!!X?.matchups?.[q]);if(!X||!E.length)return Q("p",{className:"text-xs text-red-200 font-bold uppercase tracking-[0.12em]",children:"No hay cruces jugados para resetear."},void 0,!1,void 0,this);return Q("div",{className:"space-y-2",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.18em] text-red-200",children:"Elegí el cruce a deshacer:"},void 0,!1,void 0,this),E.map((q)=>{const[W,H]=q.split("__"),L=F.find((B)=>B.firebaseId===W),U=F.find((B)=>B.firebaseId===H),C=L?.nombre||W,z=U?.nombre||H;return Q("button",{onClick:()=>WZ(N,W,H,S,d),className:"metal-btn-3d w-full text-left px-3 py-2 rounded-xl border theme-border-secondary bg-slate-900/60 hover:border-red-300/70 transition-all",children:Q("span",{className:"text-xs text-white font-semibold",children:[C," vs ",z]},void 0,!0,void 0,this)},q,!1,void 0,this)})]},void 0,!0,void 0,this)})()},void 0,!1,void 0,this),Q("div",{className:"min-w-0",children:[Q("h2",{className:"font-title text-2xl sm:text-3xl lg:text-4xl font-black italic text-white tracking-[0.08em] break-words leading-tight",children:N},void 0,!1,void 0,this),Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mt-1",children:["Arena activa · Modo: ",_Q(S)]},void 0,!0,void 0,this),X?.activeGroupLabel&&Q("p",{className:"text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--metal-gold)] mt-2",children:X.activeGroupLabel},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),!X&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("p",{className:"text-sm text-slate-300",children:"Presioná para iniciar esta arena."},void 0,!1,void 0,this),Q("button",{onClick:()=>qZ(N,S,d),className:"metal-btn-3d mt-4 bg-[var(--metal-bronze)] text-white px-5 py-3 rounded-xl font-black uppercase text-xs tracking-[0.2em]",children:"Iniciar batallas"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&X.isFinished&&Q("div",{className:"theme-surface-card border theme-border-secondary rounded-2xl p-8 text-center",children:[Q("h3",{className:"text-2xl font-black italic text-white",children:"Arena completada"},void 0,!1,void 0,this),Q("p",{className:"text-slate-400 mt-2",children:"No quedan combates nuevos para este item."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&Y&&Z&&!X.isFinished&&Q("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch",children:[Q("button",{onClick:()=>_Z(N,Y.firebaseId,S,d),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":xQ(Y.profesion).baseColor},children:[Q("img",{src:RZ(Y,N),alt:Y.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:wJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Y.nombre},void 0,!1,void 0,this),N==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",QZ(Y)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",$?.wins||0," · Batallas: ",$?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",$?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex flex-col items-center justify-center text-center",children:[Q("div",{className:"font-title text-4xl text-[var(--metal-gold)] font-black",children:"VS"},void 0,!1,void 0,this),N==="Estatura"&&Q("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 mt-3",children:"Compará altura en cm"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{onClick:()=>_Z(N,Z.firebaseId,S,d),className:"theme-surface-card metal-card-3d battle-participant-card border theme-border-secondary rounded-2xl p-8 transition-all text-left",style:{"--battle-profession-color":xQ(Z.profesion).baseColor},children:[Q("img",{src:RZ(Z,N),alt:Z.nombre,className:"w-full h-64 object-contain rounded-xl border border-slate-700/60 mb-5 bg-slate-950/70 p-2",onError:wJ},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-black uppercase tracking-[0.3em] text-slate-500",children:"Versus"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl sm:text-3xl font-black italic text-white mt-2",children:Z.nombre},void 0,!1,void 0,this),N==="Estatura"&&Q("p",{className:"text-xs text-slate-200 mt-2",children:["Altura: ",QZ(Z)]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-[var(--metal-gold)] mt-3",children:["Victorias: ",j?.wins||0," · Batallas: ",j?.battles||0]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-white/80 mt-1",children:["Puntaje final: ",j?.score||0]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)})(),V==="RANKING"&&!QJ&&Q("div",{className:"theme-surface-card rounded-2xl gothic-frame gothic-frame--ornate animate-in zoom-in-95 duration-500 ranking-table-shell",children:[Q("div",{className:"ranking-table-toolbar",children:Q("button",{type:"button",onClick:()=>xZ((J)=>!J),className:`ranking-toggle-totality ${FX?"is-active":"is-inactive"}`,children:"Ver totalidad"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"ranking-table-scroll",children:Q("table",{className:`w-full ${iX?"min-w-[860px] xl:min-w-[980px]":"min-w-[700px] xl:min-w-[820px]"} text-left border-collapse`,children:[Q("thead",{className:"theme-surface-soft",children:Q("tr",{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:"#"},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest rock-carved-text",children:Q("button",{type:"button",onClick:()=>$Q("nombre","asc"),className:"inline-flex items-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Perfil ",YJ==="nombre"?yJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>$Q("Rostro","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Rostro ",YJ==="Rostro"?yJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>$Q("Cuerpo","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Cuerpo ",YJ==="Cuerpo"?yJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>$Q("Actitud","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Actitud ",YJ==="Actitud"?yJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),iX&&Q(kJ,{children:[Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>$Q("nacionalidad","asc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Ubicación ",YJ==="nacionalidad"?yJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("th",{className:"px-4 py-6 text-[9px] font-black uppercase tracking-widest text-center rock-carved-text",children:Q("button",{type:"button",onClick:()=>$Q("edad","desc"),className:"inline-flex items-center justify-center gap-1 hover:text-[var(--metal-gold)] transition-colors",children:["Edad ",YJ==="edad"?yJ==="asc"?"↑":"↓":""]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("th",{className:"px-8 py-6 text-right",children:Q("div",{className:"flex flex-col items-end gap-1",children:[Q("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"Ordenar por"},void 0,!1,void 0,this),Q("select",{value:YJ,onChange:(J)=>{qY(J.target.value);EX("desc")},className:"bg-slate-900 border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] text-[var(--metal-gold)] text-[10px] font-black uppercase py-1 px-2 rounded-lg outline-none cursor-pointer hover:border-cyan-500 transition-all",children:[Q("option",{value:"promedio",children:"G2 SCORE TOTAL (PROMEDIO)"},void 0,!1,void 0,this),Q("optgroup",{label:"Categorías Principales",className:"theme-surface-card text-slate-500",children:[Q("option",{value:"Rostro",children:"Rostro (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Cuerpo",children:"Cuerpo (Mix)"},void 0,!1,void 0,this),Q("option",{value:"Actitud",children:"Actitud (Mix)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("optgroup",{label:"Atributos Específicos",className:"theme-surface-card text-slate-500",children:aJ.map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("tbody",{children:c0.map((J,X)=>Q("tr",{onClick:()=>oQ(J),className:`cursor-pointer border-b border-slate-700/70 last:border-0 transition-all duration-300 group ${X===0?"podium-1":X===1?"podium-2":X===2?"podium-3":"hover:bg-white/5"}`,children:[Q("td",{className:"px-8 py-5",children:Q("span",{className:`font-black italic rock-carved-text ${X===0?"text-gold text-4xl":X===1?"text-silver text-3xl":X===2?"text-bronze text-2xl":"text-slate-600 text-lg"}`,children:["#",X+1]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-8 py-5",children:Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-14 h-14 rounded-xl border-2 p-0.5 transition-all duration-500",style:{borderColor:JJ(J.profesion).color,boxShadow:`0 0 10px ${JJ(J.profesion).sombra}`},children:Q("img",{src:ZJ(J.fotos?.[0],"https://via.placeholder.com/400x500"),className:"w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100",onError:wJ},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("div",{children:[Q("p",{className:"font-title font-black text-white text-sm tracking-[0.06em] rock-carved-text",children:J.nombre},void 0,!1,void 0,this),Q("p",{className:"font-title text-[10px] font-medium tracking-[0.06em] rock-carved-text",children:J.profesion},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();VQ({isOpen:!0,profile:J,category:"Rostro"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Rostro de ${J.nombre}`,children:rQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();VQ({isOpen:!0,profile:J,category:"Cuerpo"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Cuerpo de ${J.nombre}`,children:eQ(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("td",{className:"px-4 py-5 text-center",children:Q("button",{type:"button",onClick:(Y)=>{Y.stopPropagation();VQ({isOpen:!0,profile:J,category:"Actitud"})},className:"text-xs font-bold text-slate-300 hover:text-emerald-300 transition-colors",title:`Ver detalle de batallas en Actitud de ${J.nombre}`,children:JX(J).toFixed(0)},void 0,!1,void 0,this)},void 0,!1,void 0,this),iX&&Q(kJ,{children:[Q("td",{className:"px-4 py-5 text-center",children:[Q("p",{className:"text-[10px] font-bold text-slate-300 uppercase leading-none",children:J.nacionalidad},void 0,!1,void 0,this),Q("p",{className:"text-[8px] font-black text-[var(--metal-gold)]/70 uppercase tracking-tighter",children:J.ciudad},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-4 py-5 text-center font-bold text-[10px] text-slate-400",children:[bJ(J.fechaNacimiento)," AÑOS"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("td",{className:"px-8 py-5 text-right",children:Q("div",{className:`inline-block bg-slate-900 border px-4 py-2 rounded-xl transition-all duration-300 ${X===0?"border-[#ffd700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]":X===1?"border-[#c0c0c0]/50 shadow-[0_0_15px_rgba(192,192,192,0.3)]":X===2?"border-[#cd7f32]/50 shadow-[0_0_15px_rgba(205,127,50,0.3)]":"theme-border-secondary group-hover:border-[color:color-mix(in_srgb,var(--metal-gold)_50%,transparent)]"}`,children:Q("span",{className:`font-black leading-none ${X===0?"text-gold":X===1?"text-silver":X===2?"text-bronze":"text-[var(--metal-gold)] text-lg"}`,children:m0(J)},void 0,!1,void 0,this)},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},J.firebaseId||J.id,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),VJ.isOpen&&VJ.profile&&VJ.category&&(()=>{const J=u0(VJ.profile.firebaseId,VJ.category),X=sJ[VJ.category]||[];return Q("div",{className:`fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 ${BJ?"lg:pl-[19rem] lg:justify-end":""}`,onClick:()=>{VQ({isOpen:!1,profile:null,category:null});OQ(null)},children:Q("div",{className:"w-full max-w-3xl max-h-[90vh] overflow-y-auto themed-scrollbar theme-surface-card border theme-border-secondary rounded-2xl p-6",onClick:(Y)=>Y.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4 mb-6",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[VJ.profile.nombre," · ",VJ.category]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Detalle de enfrentamientos ganados y perdidos."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>{VQ({isOpen:!1,profile:null,category:null});OQ(null)},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"mb-4",children:[Q("p",{className:"text-[10px] uppercase tracking-[0.18em] text-slate-400 font-black mb-2",children:"Detalle por ítem"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:X.map((Y)=>(()=>{const Z=f0(VJ.profile.firebaseId,Y);return Q("button",{type:"button",onClick:()=>{const $=nX(VJ.profile.firebaseId,Y);OQ($)},className:"btn-metal btn-metal--bronze px-3 py-2 rounded-lg text-[10px] font-black min-w-[10.5rem] text-left",children:[Q("p",{className:"leading-none",children:Y},void 0,!1,void 0,this),Q("p",{className:"mt-1 text-[9px] font-semibold text-slate-200/90 tracking-[0.01em] normal-case",children:[Z.wins,"/",Z.total," · ",Z.winRate.toFixed(0),"% victorias"]},void 0,!0,void 0,this)]},`breakdown-item-${Y}`,!0,void 0,this)})())},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!PQ?.arenaName&&Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[Q("div",{className:"rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300 mb-3",children:"Ganó contra"},void 0,!1,void 0,this),J.wins.length?Q("ul",{className:"space-y-2",children:J.wins.map((Y,Z)=>Q("li",{className:"text-sm text-emerald-200 font-semibold",children:Y},`win-${Y}-${Z}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-emerald-200/70",children:"No hay batallas ganadas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 min-h-44",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-rose-300 mb-3",children:"Perdió contra"},void 0,!1,void 0,this),J.losses.length?Q("ul",{className:"space-y-2",children:J.losses.map((Y,Z)=>Q("li",{className:"text-sm text-rose-200 font-semibold",children:Y},`loss-${Y}-${Z}`,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"text-xs text-rose-200/70",children:"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),PQ?.arenaName&&Q("div",{className:"mt-5 rounded-2xl border border-cyan-500/40 bg-cyan-950/15 p-4 max-h-[48vh] overflow-y-auto themed-scrollbar",children:[Q("div",{className:"flex items-center justify-between gap-3 mb-4",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-200",children:["Ítem: ",PQ.arenaName]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:()=>OQ(null),className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar detalle"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["wins","losses"].map((Y)=>{const Z=Y==="wins",$=PQ[Y]||[];return Q("div",{className:`rounded-xl border p-3 min-h-36 ${Z?"border-emerald-500/40 bg-emerald-950/15":"border-rose-500/40 bg-rose-950/15"}`,children:[Q("h5",{className:`text-[10px] font-black uppercase tracking-[0.15em] mb-2 ${Z?"text-emerald-300":"text-rose-300"}`,children:Z?"Ganadas":"Perdidas"},void 0,!1,void 0,this),$.length?Q("ul",{className:"space-y-2",children:$.map((j,E)=>Q("li",{className:"flex items-center justify-between gap-2",children:[Q("span",{className:`text-sm font-semibold ${Z?"text-emerald-100":"text-rose-100"}`,children:j.opponentName},void 0,!1,void 0,this),Q("button",{type:"button",className:"btn-metal btn-metal--red px-2 py-1 rounded text-[9px] font-black",onClick:async()=>{if(!window.confirm("¿Seguro que querés deshacer esta batalla?"))return;try{await WZ(j.arenaName,j.profileId,j.opponentId);const W=nX(VJ.profile.firebaseId,j.arenaName);OQ(W)}catch(W){console.error("No se pudo eliminar la batalla del desglose:",W);alert("No se pudo eliminar la batalla. Verificá tu conexión con Firebase e intentá de nuevo.")}},children:"Eliminar"},void 0,!1,void 0,this)]},`${Y}-${j.pairKey}-${E}`,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:`text-xs ${Z?"text-emerald-200/70":"text-rose-200/70"}`,children:Z?"No hay batallas ganadas registradas.":"No hay batallas perdidas registradas."},void 0,!1,void 0,this)]},`item-detail-${Y}`,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})(),UX.isOpen&&UX.profile&&(()=>{const J=UX.profile,X=IX(J),Y=Object.entries(sJ);return Q("div",{className:"fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>gQ({isOpen:!1,profile:null}),children:Q("div",{className:"w-full max-w-3xl theme-surface-card border theme-border-secondary rounded-2xl p-6 space-y-6",onClick:(Z)=>Z.stopPropagation(),children:[Q("div",{className:"flex items-start justify-between gap-4",children:[Q("div",{children:[Q("h3",{className:"font-title text-xl font-black text-white tracking-wide",children:[J.nombre," · Puntaje"]},void 0,!0,void 0,this),Q("p",{className:"text-xs text-slate-300 mt-1",children:"Panel de detalle por ítems, características y G2 Score."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"button",onClick:(Z)=>{Z.stopPropagation();gQ({isOpen:!1,profile:null})},className:"btn-metal btn-metal--silver px-3 py-2 rounded-lg text-[10px] font-black",children:"Cerrar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-emerald-300",children:"Ítems"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:aJ.map((Z)=>Q("button",{type:"button",onClick:($)=>$.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-slate-600/80 bg-slate-900/80 text-slate-100",children:[Z,": ",Number(X[Z]||0).toFixed(0)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-cyan-300",children:"Características"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-2",children:Y.map(([Z,$])=>Q("button",{type:"button",onClick:(j)=>j.stopPropagation(),className:"px-3 py-2 rounded-lg text-xs font-bold border border-cyan-500/50 bg-cyan-950/25 text-cyan-100",children:[Z,": ",nY(J,Z).toFixed(0)]},Z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("section",{className:"space-y-3",children:[Q("h4",{className:"text-xs font-black uppercase tracking-[0.16em] text-[var(--metal-gold)]",children:"G2 Score"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:(Z)=>Z.stopPropagation(),className:"w-full px-4 py-3 rounded-xl text-sm font-black border border-[var(--metal-gold)]/50 bg-[color:color-mix(in_srgb,var(--metal-gold)_18%,rgba(15,23,42,0.82))] text-[var(--metal-gold)]",children:["G2 SCORE TOTAL: ",qJ(J)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)})()]},void 0,!0,void 0,this),V==="CATEGORIAS"&&!QJ&&Q("div",{className:"space-y-10 animate-in fade-in duration-500",children:[Q("div",{className:"flex justify-between items-end",children:[Q("div",{children:Q("h2",{className:"text-3xl font-black italic text-white uppercase tracking-tighter",children:"Carpetas"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:()=>{vX();bQ(!0)},className:"btn-metal btn-metal--gold px-8 py-3 rounded-xl text-xs",children:"NUEVA CATEGORÍA"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),k.length===0?Q("div",{className:"py-20 border-2 border-dashed theme-border-secondary rounded-2xl text-center",children:Q("p",{className:"text-slate-600 font-black italic uppercase",children:"No hay categorías personalizadas"},void 0,!1,void 0,this)},void 0,!1,void 0,this):Q("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:k.map((J)=>Q("div",{onClick:()=>UQ(J.firebaseId),className:"group relative bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] rounded-xl overflow-hidden border theme-border-secondary cursor-pointer hover:border-[var(--metal-gold)]/70 transition-all duration-500 shadow-[inset_0_1px_0_rgba(148,163,184,0.2),0_18px_30px_rgba(2,6,23,0.55)] aspect-[3/4]",children:[Q("div",{className:"absolute top-5 right-5 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300",children:[Q("button",{onClick:(X)=>{X.stopPropagation();HJ({...J,reglas:{...J.reglas,nacionalidades:J.reglas?.nacionalidades||[],profesiones:J.reglas?.profesiones||[],ciudades:J.reglas?.ciudades||[]}});bQ(!0)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-[var(--metal-bronze)] text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(p,{name:"pencil",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{onClick:(X)=>{X.stopPropagation();if(window.confirm("¿Seguro que querés borrar esta carpeta?"))z0(J.firebaseId)},className:"w-8 h-8 flex items-center justify-center bg-slate-900/95 hover:bg-red-600 text-white rounded-lg border theme-border-secondary transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_16px_rgba(2,6,23,0.45)]",children:Q(p,{name:"x",size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute inset-0",children:[Q("img",{src:ZJ(J.coverImg,"https://via.placeholder.com/400x600?text=Sin+Portada"),className:"w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500",onError:wJ},void 0,!1,void 0,this),Q("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute bottom-0 left-0 right-0 p-6 text-center",children:[Q("h3",{className:"text-xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg",children:J.label},void 0,!1,void 0,this),Q("div",{className:"inline-flex items-center gap-2 bg-[var(--metal-bronze)]/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)]",children:Q("span",{className:"text-[10px] font-black uppercase text-[var(--metal-gold)] tracking-widest",children:[F.filter((X)=>QX(X).includes(J.firebaseId)).length," Perfiles"]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.firebaseId,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),YY&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{onClick:()=>hJ(!1),className:"p-2 hover:bg-slate-800 rounded-full transition-colors",children:Q(p,{name:"x",size:20,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:T0,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 gap-16",children:Q("div",{className:"space-y-8",children:[Q("div",{className:"flex flex-col items-center gap-6",children:[Q("div",{className:"flex items-center gap-4 self-start",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/50",children:Q(p,{name:t?"user":"user-plus"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic tracking-tighter text-white",children:t?"Editar Perfil":"Información del Perfil"},void 0,!1,void 0,this),t&&Q("button",{type:"button",onClick:()=>{$1({...x,firebaseId:t})},className:"btn-metal btn-metal--gold ml-4 px-4 py-2 rounded-xl text-[10px] flex items-center gap-2",children:[Q(p,{name:"image",size:14},void 0,!1,void 0,this),"Multimedia"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"w-48 h-60 rounded-2xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden bg-slate-900 flex items-center justify-center relative group",children:x.fotos.length>0&&x.fotos[0]!==""?Q("img",{src:ZJ(x.fotos[0],qQ),className:"w-full h-full object-cover",alt:"Preview",onError:wJ},void 0,!1,void 0,this):Q("div",{className:"text-center p-4",children:[Q(p,{name:"image",size:32,className:"mx-auto text-slate-700 mb-2"},void 0,!1,void 0,this),Q("p",{className:"text-[9px] font-bold text-slate-600 uppercase tracking-widest",children:"Vista Previa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[Q("div",{className:"rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300",children:"Datos actuales"},void 0,!1,void 0,this),aQ.completed.length>0?Q("ul",{className:"mt-3 space-y-1",children:aQ.completed.map((J)=>Q("li",{className:"text-xs text-emerald-100/90",children:[Q("span",{className:"font-black",children:[J.label,":"]},void 0,!0,void 0,this)," ",J.preview]},J.key,!0,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-emerald-100/70",children:"Todavía no hay datos cargados."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"rounded-2xl border border-amber-300/30 bg-amber-950/20 p-4",children:[Q("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-amber-200",children:"Datos faltantes por completar"},void 0,!1,void 0,this),aQ.missing.length>0?Q("ul",{className:"mt-3 space-y-1",children:aQ.missing.map((J)=>Q("li",{className:"text-xs text-amber-100/90",children:Q("span",{className:"font-black",children:J.label},void 0,!1,void 0,this)},J.key,!1,void 0,this))},void 0,!1,void 0,this):Q("p",{className:"mt-3 text-xs text-amber-100/70",children:"¡Perfil completo en esta sección!"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("input",{required:!0,placeholder:"Nombre Artístico",className:"col-span-2 w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold",value:x.nombre,onChange:(J)=>i({...x,nombre:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de la Foto (Avatar)"},void 0,!1,void 0,this),Q("input",{placeholder:"https://imagen.com/foto.jpg",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none focus:ring-2 focus:ring-[var(--glow-gold)] text-white font-bold text-xs",value:x.fotos[0]||"",onChange:(J)=>i((X)=>dY(X,J.target.value))},void 0,!1,void 0,this),Q("input",{type:"file",accept:"image/*,.gif",onChange:eZ,className:"w-full theme-surface-soft border border-dashed theme-border-secondary p-4 rounded-xl outline-none text-slate-200 font-semibold text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:px-3 file:py-2 file:text-cyan-200 file:font-black"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Nacimiento"},void 0,!1,void 0,this),Q("input",{type:"date",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.fechaNacimiento,onChange:(J)=>i({...x,fechaNacimiento:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Estatura (cm)"},void 0,!1,void 0,this),Q("input",{placeholder:"170",type:"number",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.estaturaCm,onChange:(J)=>i({...x,estaturaCm:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("input",{placeholder:"Nacionalidad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.nacionalidad,onChange:(J)=>i({...x,nacionalidad:J.target.value})},void 0,!1,void 0,this),Q("input",{placeholder:"Ciudad",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold",value:x.ciudad,onChange:(J)=>i({...x,ciudad:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"col-span-2 space-y-1 group",children:[Q("label",{className:"text-[9px] font-black text-[var(--metal-gold)]/60 ml-4 uppercase tracking-widest transition-colors group-focus-within:text-[var(--metal-gold)]",children:"Profesión"},void 0,!1,void 0,this),Q("select",{required:!0,className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold appearance-none cursor-pointer transition-all duration-300 focus:border-[var(--metal-gold)] focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:bg-slate-900",value:x.profesion,onChange:(J)=>i({...x,profesion:J.target.value}),children:[Q("option",{value:"",className:"theme-surface-card",children:"Seleccionar..."},void 0,!1,void 0,this),Q("option",{value:"Cantante",className:"theme-surface-card",children:"\uD83C\uDFA4 Cantante"},void 0,!1,void 0,this),Q("option",{value:"Actriz",className:"theme-surface-card",children:"\uD83C\uDFAC Actriz"},void 0,!1,void 0,this),Q("option",{value:"Modelo",className:"theme-surface-card",children:"\uD83D\uDC60 Modelo"},void 0,!1,void 0,this),Q("option",{value:"NSFW",className:"theme-surface-card",children:"\uD83D\uDD25 NSFW"},void 0,!1,void 0,this),Q("option",{value:"Influencer",className:"theme-surface-card",children:"\uD83D\uDCF1 Influencer"},void 0,!1,void 0,this),Q("option",{value:"Bailarina y Atleta",className:"theme-surface-card",children:"\uD83D\uDC83\uD83C\uDFCB️‍♀️ Bailarina y Atleta"},void 0,!1,void 0,this),Q("option",{value:"Otro",className:"theme-surface-card",children:"\uD83D\uDCD6 Otro"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--metal-gold)]/50",children:Q(p,{name:"chevron-down",size:18},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q("div",{className:"flex gap-4",children:[t&&Q("button",{type:"button",onClick:N0,className:"btn-metal btn-metal--danger px-10 py-8 rounded-xl text-xs",children:Q(p,{name:"trash-2",size:20},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold flex-1 py-8 rounded-xl text-xs",children:t?"Actualizar Registro":"Guardar Perfil"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),GZ&&Q("div",{className:"fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-6",onClick:fX,children:Q("div",{className:"w-full max-w-xl theme-surface-card border theme-border-secondary rounded-3xl p-8 space-y-6",onClick:(J)=>J.stopPropagation(),children:[Q("div",{className:"space-y-3",children:[Q("p",{className:"text-xs font-black uppercase tracking-[0.24em] text-red-300",children:"Acción destructiva"},void 0,!1,void 0,this),Q("h3",{className:"text-2xl font-black italic text-white tracking-tight",children:"¿Eliminar perfil?"},void 0,!1,void 0,this),Q("p",{className:"text-sm text-slate-300",children:["Esta acción eliminará de forma permanente a ",Q("span",{className:"font-black text-white",children:UJ?.nombre||"este perfil"},void 0,!1,void 0,this)," y sus datos en Firebase. No se puede deshacer."]},void 0,!0,void 0,this),HY&&Q("div",{className:"rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200",children:HY},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"flex justify-end gap-3",children:[Q("button",{type:"button",onClick:fX,className:"btn-metal btn-metal--silver px-6 py-3 rounded-xl text-[10px]",children:"Cancelar"},void 0,!1,void 0,this),Q("button",{type:"button",onClick:K0,className:"btn-metal btn-metal--danger px-6 py-3 rounded-xl text-[10px]",children:"Eliminar"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),ZY&&Q("div",{className:"fixed inset-0 z-[140] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm",children:Q("div",{className:"bg-[linear-gradient(180deg,#0b1222_0%,#050a16_100%)] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(148,163,184,0.22),0_24px_60px_rgba(2,6,23,0.65)] border theme-border-secondary max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-300",children:[Q("button",{type:"button",onClick:()=>{vX();bQ(!1)},className:"p-4 hover:bg-slate-800 rounded-full transition-all",children:Q(p,{name:"x",size:24,className:"text-slate-400"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("form",{onSubmit:A0,className:"flex-1 overflow-y-auto p-12 space-y-12",children:[Q("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[Q("div",{className:"space-y-8",children:[Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:"w-12 h-12 bg-[var(--metal-bronze)] rounded-2xl flex items-center justify-center text-white",children:Q(p,{name:"scroll"},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q("h3",{className:"text-xl font-black italic text-white",children:"Nuevo Archivo del Reino"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-4",children:[Q("input",{required:!0,placeholder:"Nombre de la Carpeta",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none font-bold text-lg text-white",value:K.label,onChange:(J)=>HJ({...K,label:J.target.value})},void 0,!1,void 0,this),Q("div",{className:"w-full",children:Q("div",{className:"space-y-1 w-full",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"URL de Portada"},void 0,!1,void 0,this),Q("input",{placeholder:"https://...",className:"w-full theme-surface-soft border theme-border-secondary p-5 rounded-xl outline-none text-white font-bold text-xs",value:K.coverImg,onChange:(J)=>HJ({...K,coverImg:J.target.value})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-6",children:[Q("h4",{className:"text-[10px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2",children:[Q(p,{name:"shield",size:12},void 0,!1,void 0,this)," Mandatos de Clasificación del Consejo"]},void 0,!0,void 0,this),Q("div",{className:"p-8 bg-slate-950/50 border theme-border-secondary rounded-2xl space-y-6",children:[Q("div",{className:"grid grid-cols-2 gap-4",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"NACIONALIDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:K.reglas.nacionalidades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>HJ({...K,reglas:{...K.reglas,nacionalidades:K.reglas.nacionalidades.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!K.reglas.nacionalidades.includes(J.target.value))HJ({...K,reglas:{...K.reglas,nacionalidades:[...K.reglas.nacionalidades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir país..."},void 0,!1,void 0,this),Y0.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"CIUDADES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:K.reglas.ciudades.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>HJ({...K,reglas:{...K.reglas,ciudades:K.reglas.ciudades.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!K.reglas.ciudades.includes(J.target.value))HJ({...K,reglas:{...K.reglas,ciudades:[...K.reglas.ciudades,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir ciudad..."},void 0,!1,void 0,this),Z0.filter((J)=>J!=="Todas").map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"PROFESIONES"},void 0,!1,void 0,this),Q("div",{className:"flex flex-wrap gap-1 mb-2 min-h-[20px]",children:K.reglas.profesiones.map((J)=>Q("span",{className:"bg-[var(--metal-bronze)]/20 text-[var(--metal-gold)] text-[8px] font-black px-2 py-1 rounded-full border border-[color:color-mix(in_srgb,var(--metal-gold)_30%,transparent)] flex items-center gap-1",children:[J," ",Q("button",{type:"button",onClick:()=>HJ({...K,reglas:{...K.reglas,profesiones:K.reglas.profesiones.filter((X)=>X!==J)}}),children:"×"},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"w-full theme-surface-card p-3 rounded-xl text-[10px] font-bold border theme-border-secondary text-white outline-none",onChange:(J)=>{if(J.target.value&&!K.reglas.profesiones.includes(J.target.value))HJ({...K,reglas:{...K.reglas,profesiones:[...K.reglas.profesiones,J.target.value]}})},children:[Q("option",{value:"",children:"Añadir profesión..."},void 0,!1,void 0,this),Object.keys(QY).map((J)=>Q("option",{value:J,children:J},J,!1,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2",children:[Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MIN"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"18",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:K.reglas.edadMin,onChange:(J)=>HJ({...K,reglas:{...K.reglas,edadMin:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"EDAD MAX"},void 0,!1,void 0,this),Q("input",{type:"number",placeholder:"30",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-white",value:K.reglas.edadMax,onChange:(J)=>HJ({...K,reglas:{...K.reglas,edadMax:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("div",{className:"space-y-1 pt-4 border-t theme-border-secondary",children:[Q("label",{className:"text-[9px] font-black text-slate-500 ml-4 uppercase",children:"Condición de Score"},void 0,!1,void 0,this),Q("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:K.reglas.caracteristica,onChange:(J)=>HJ({...K,reglas:{...K.reglas,caracteristica:J.target.value}}),children:aJ.map((J)=>Q("option",{children:J},J,!1,void 0,this))},void 0,!1,void 0,this),Q("select",{className:"theme-surface-card p-3 rounded-xl text-[10px] font-bold outline-none border theme-border-secondary text-white",value:K.reglas.operador,onChange:(J)=>HJ({...K,reglas:{...K.reglas,operador:J.target.value}}),children:[Q("option",{children:"Superior a"},void 0,!1,void 0,this),Q("option",{children:"Inferior a"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("input",{type:"number",placeholder:"Umbral (0-10)",className:"w-full theme-surface-card p-4 rounded-2xl outline-none text-xs font-bold border theme-border-secondary text-[var(--metal-gold)]",value:K.reglas.umbral,onChange:(J)=>HJ({...K,reglas:{...K.reglas,umbral:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q("button",{type:"submit",className:"btn-metal btn-metal--gold w-full py-8 rounded-xl text-xs",children:"CREAR CARPETA INTELIGENTE"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},E1=ReactDOM.createRoot(document.getElementById("root"));E1.render(Q(L1,{},void 0,!1,void 0,this));