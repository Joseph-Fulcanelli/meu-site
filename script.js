// --- SISTEMA DE ABAS (LUXO x MILITAR) ---
function mudarAba(tipo) {
    const btnLuxo = document.querySelector('.aba-btn:nth-child(1)');
    const btnMilitar = document.querySelector('.aba-btn:nth-child(2)');
    const divLuxo = document.getElementById('conteudo-luxo');
    const divMilitar = document.getElementById('conteudo-militar');

    if (tipo === 'luxo') {
        btnLuxo.classList.add('ativa');
        btnMilitar.classList.remove('ativa');
        divLuxo.classList.add('ativo');
        divMilitar.classList.remove('ativo');
    } else {
        btnMilitar.classList.add('ativa');
        btnLuxo.classList.remove('ativa');
        divMilitar.classList.add('ativo');
        divLuxo.classList.remove('ativo');
    }
}

// --- CARROSSEL DA DIVISÃO DE LUXO ---
const imgsLuxo = [
    "https://picsum.photos/id/1075/800/400",
    "https://picsum.photos/id/1031/800/400",
    "https://picsum.photos/id/111/800/400"
];
let idxLuxo = 0;

function mudarSlideLuxo(direcao) {
    idxLuxo = (idxLuxo + direcao + imgsLuxo.length) % imgsLuxo.length;
    document.getElementById("slide-luxo").src = imgsLuxo[idxLuxo];
    document.getElementById("atual-luxo").textContent = idxLuxo + 1;
}

// --- CARROSSEL DA DIVISÃO MILITAR ---
const imgsMilitar = [
    "https://picsum.photos/id/1048/800/400",
    "https://picsum.photos/id/1069/800/400",
    "https://picsum.photos/id/1050/800/400"
];
let idxMilitar = 0;

function mudarSlideMilitar(direcao) {
    idxMilitar = (idxMilitar + direcao + imgsMilitar.length) % imgsMilitar.length;
    document.getElementById("slide-militar").src = imgsMilitar[idxMilitar];
    document.getElementById("atual-militar").textContent = idxMilitar + 1;
}


// --- BOTÃO VOLTAR AO TOPO ---
window.addEventListener("scroll", function() {
    const btnSubir = document.getElementById("btnSubir");
    if (btnSubir) {
        if (window.scrollY > 400) {
            btnSubir.classList.remove("oculto");
        } else {
            btnSubir.classList.add("oculto");
        }
    }
});

function subirAoInicio() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


// --- SISTEMA DE FAQ (ACORDEÃO) ---
function toggleFaq(botao) {
    const item = botao.parentElement;
    document.querySelectorAll('.faq-item').forEach(i => {
        if (i !== item) i.classList.remove('aberto');
    });
    item.classList.toggle('aberto');
}