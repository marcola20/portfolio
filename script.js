let idiomaAtual = "pt"; 

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".conhecimento-card");
  const texto = document.getElementById("texto-conhecimento");

  const textos = {
    pt: {
      csharp: `C# é uma linguagem moderna, tipada e orientada a objetos, amplamente utilizada no desenvolvimento de aplicações desktop e backends robustos.<br><br><strong>Minha experiência:</strong> Trabalho com C# desde o início da carreira, construindo sistemas empresariais sólidos, especialmente no setor financeiro. Uso intensivo de arquitetura em camadas, princípios SOLID e integração com APIs, sempre com foco em performance e manutenção. No projeto BitBeak, utilizei Entity Framework para persistência com foco em produtividade e manutenção limpa.`,
      netcore: `.NET Core é a plataforma ideal para criar APIs RESTful, aplicações cross-platform e serviços leves com alta performance.<br><br><strong>Na prática:</strong> Utilizo em projetos backend modernos, com foco em arquitetura limpa, microsserviços e integração contínua. Aproveito seu desempenho e flexibilidade para entregar soluções escaláveis e seguras.`,
      dotnet: `O .NET Framework é a base de muitos sistemas legados robustos, com amplo suporte a bibliotecas e ferramentas Windows.<br><br><strong>Minha atuação:</strong> Mantenho e evoluo aplicações WinForms integradas ao backend em C#, garantindo estabilidade e atualizações sem comprometer a base existente.`,
      figma: `Figma é a ferramenta que uso para prototipação e design de interfaces web responsivas e bem estruturadas.`,
      html: `HTML é a espinha dorsal da web, responsável pela estruturação semântica do conteúdo.<br><br><strong>Meu domínio:</strong> Escrevo HTML limpo e organizado, priorizando acessibilidade e SEO, além de facilitar o trabalho em equipe no frontend.`,
      css: `CSS é a linguagem que dá estilo e identidade visual às páginas web.<br><br><strong>Na prática:</strong> Uso CSS moderno com foco em responsividade, animações suaves e integração com pré-processadores ou frameworks como Tailwind.`,
      js: `JavaScript permite criar interatividade e lógica no frontend, sendo essencial para qualquer aplicação web moderna.<br><br><strong>Minha experiência:</strong> Desenvolvo SPAs, componentes dinâmicos e interações personalizadas tanto com JS puro quanto com frameworks como React e Angular.`,
      tailwind: `Tailwind é um framework utilitário que acelera o desenvolvimento de interfaces com consistência e responsividade.<br><br><strong>Na prática:</strong> Uso para construir layouts rápidos, limpos e escaláveis, com foco em produtividade e design padronizado.`,
      angular: `Angular é um framework completo para criação de aplicações SPA com arquitetura baseada em componentes, rotas e serviços.<br><br><strong>Como aplico:</strong> Desenvolvo interfaces ricas e modulares com Angular, utilizando TypeScript, RxJS e boas práticas de escalabilidade.`,
      react: `React é uma biblioteca JavaScript para construção de interfaces reativas e performáticas.<br><br><strong>Utilização:</strong> Crio componentes reutilizáveis e dinâmicos em aplicações com foco em experiência do usuário e integração com APIs externas.`,
      next: `Next.js é um framework para React com renderização híbrida, performance otimizada e excelente suporte a SEO.<br><br><strong>Quando uso:</strong> Para aplicações com foco em tempo de carregamento e visibilidade orgânica, aproveitando recursos como SSR e rotas dinâmicas.`,
      blazor: `Blazor é um framework da Microsoft para construção de aplicações web interativas usando C# no lugar de JavaScript, permitindo o compartilhamento de código entre cliente e servidor.<br><br><strong>Minha experiência:</strong> Utilizo Blazor para criar interfaces web ricas e dinâmicas aproveitando o ecossistema .NET, facilitando a integração com APIs e lógicas de negócio já implementadas em C#, proporcionando uma experiência de desenvolvimento consistente e produtiva.`,
      python: `Python é a linguagem que uso para pipelines de dados, integração com LLMs e serviços de backend leves.<br><br><strong>Na prática:</strong> No Extrator de Documentos Financeiros, construí em Python 3.12 toda a extração, validação e avaliação, com Pydantic v2 para schemas tipados e SQLAlchemy 2 para persistência.`,
      fastapi: `FastAPI é um framework Python para APIs com validação automática de dados e documentação gerada a partir dos tipos.<br><br><strong>Na prática:</strong> Usei no Extrator de Documentos Financeiros para expor a fila de revisão e o diagnóstico de cada documento à interface em Next.js, com esquemas Pydantic compartilhados entre a API e o pipeline.`,
      postgres: `PostgreSQL é o banco relacional que uso como padrão para persistência em projetos web e de backend.<br><br><strong>Na prática:</strong> Trabalhei com PostgreSQL em APIs .NET para telemetria agrícola na Spro IT Solutions e, mais recentemente, na fila de revisão do Extrator de Documentos Financeiros, com SQLAlchemy 2 e migrações versionadas com Alembic.`,
      ia: `Trabalho com LLMs como componente de sistema, não como caixa preta: saída estruturada, avaliação automatizada com evals, defesa contra prompt injection e integração direta com os SDKs da Anthropic e do Gemini, sem framework intermediário.<br><br><strong>Na prática:</strong> No Extrator de Documentos Financeiros, a confiança na extração vem de validação determinística sobre o próprio documento, não do modelo, e a taxa de escape é medida contra um corpus adversarial próprio. No Agente de Atendimento do Empório da Música, o modelo conversa e decide qual ferramenta chamar, enquanto preço, estoque e acesso aos pedidos ficam em código, com 20 cenários de avaliação automática. No dia a dia, uso desenvolvimento assistido por agentes a partir de especificação escrita e com revisão do resultado. Tenho o Google AI Professional Certificate.`,
      legenda: `Passe o mouse sobre os cards para saber mais.`,
      nav: ["Home", "Conhecimentos", "Projetos", "Experiência", "Formação"],
      conhecimentosTitulo: "CONHECIMENTOS",
      heroTexto: `Atuo como desenvolvedor full-stack com foco principal em backend C# e integração de sistemas. No frontend, trabalho com interfaces modernas em WinForms usando DevExpress, além de Angular, React e JavaScript para aplicações web. Tenho experiência em toda a jornada do projeto — da arquitetura à entrega — sempre buscando criar soluções robustas, funcionais e com boa usabilidade. Mais recentemente, trabalho com integração de LLMs em sistemas, com foco em saída estruturada, validação determinística e avaliação automatizada.`,
      heroBotaoContato: "Entre em Contato",
      heroBotaoCV: "Download CV",
      projetosTitulo: "PROJETOS",
      formacaoTitulo: "FORMAÇÃO & CERTIFICAÇÕES",
      academicoDivTitle: "Formação Acadêmica",
      academicoTitulo: "Bacharelado em Engenharia de Software",
      academicoData: "Concluído em Fev/2025",
      academicoDescricao: "Formação completa em Engenharia de Software com ênfase em desenvolvimento de sistemas, arquitetura de software, metodologias ágeis e gestão de projetos. Durante a graduação, desenvolvi projetos práticos aplicando tecnologias modernas e boas práticas de engenharia.",
      academicoLinkTexto: "Ver post no LinkedIn",
      certificationsDivTitle: "Certificações e Conquistas",
      certificacaoTitulo: "Artigo Aceito no SBES 2025 (CBSoft)",
      certificacaoEmissor: "Sociedade Brasileira de Computação (SBC)",
      certificacaoData: "Jun 2025",
      certificacaoDescricao: "Artigo aprovado no XXXIX Simpósio Brasileiro de Engenharia de Software (SBES 2025), principal evento da área no Brasil, parte do CBSoft (Congresso Brasileiro de Software). O trabalho apresenta o BitBeak, uma ferramenta educacional gamificada que usa narrativas em mangá para apoiar o ensino introdutório de programação. A pesquisa envolve o desenvolvimento da plataforma, trilhas de aprendizagem, gamificação e avaliação empírica com estudantes por meio do modelo MEEGA+. A apresentação foi realizada presencialmente em Recife (PE), em setembro de 2025.",
      certificacaoLinkTexto: "Ver post no LinkedIn",
      certificacaoArtigoTexto: "Ler artigo completo",
      certificacao2Titulo: "Google AI Professional Certificate",
      certificacao2Emissor: "Google, via Coursera",
      certificacao2Data: "Ago 2026",
      certificacao2Descricao: "Certificado profissional do Google composto por sete cursos sobre aplicação de IA generativa ao trabalho: brainstorming, pesquisa, comunicação, criação de conteúdo e análise de dados. Complementa a experiência prática com LLMs demonstrada no projeto Extrator de Documentos Financeiros.",
      certificacao2LinkTexto: "Ver credencial"
    },
    en: {
      csharp: `C# is a modern, statically-typed, object-oriented language widely used in building robust desktop and backend applications.<br><br><strong>My experience:</strong> I've worked with C# since the beginning of my career, building solid enterprise systems — especially in the financial sector — using layered architecture, SOLID principles, and API integrations. In the BitBeak project, I used Entity Framework for clean and efficient persistence.`,
      netcore: `.NET Core is the ideal platform for building high-performance RESTful APIs, cross-platform apps, and lightweight services.<br><br><strong>In practice:</strong> I use it for modern backend projects, focusing on clean architecture, microservices, and CI/CD. I take advantage of its performance and flexibility to deliver scalable and secure solutions.`,
      dotnet: `.NET Framework is the backbone of many robust legacy systems, with broad support for Windows libraries and tools.<br><br><strong>My work:</strong> I maintain and evolve WinForms apps integrated with C# backends, ensuring stability and updates without compromising existing infrastructure.`,
      figma: `Figma is the tool I use to prototype and design responsive and well-structured web interfaces.`,
      html: `HTML is the backbone of the web, responsible for semantic structuring of content.<br><br><strong>My approach:</strong> I write clean and accessible HTML, focusing on SEO and maintainability for team collaboration.`,
      css: `CSS brings style and identity to web pages.<br><br><strong>In practice:</strong> I use modern CSS with a focus on responsiveness, smooth animations, and integration with preprocessors or frameworks like Tailwind.`,
      js: `JavaScript enables interactivity and logic in the frontend, essential for any modern web application.<br><br><strong>My experience:</strong> I build SPAs, dynamic components, and personalized interactions with vanilla JS or frameworks like React and Angular.`,
      tailwind: `Tailwind is a utility-first framework that speeds up UI development with consistency and responsiveness.<br><br><strong>In practice:</strong> I use it to create clean, scalable layouts with a focus on productivity and visual consistency.`,
      angular: `Angular is a complete framework for building SPAs with a component-based and service-oriented architecture.<br><br><strong>How I use it:</strong> I create rich, modular UIs using TypeScript, RxJS, and scalable design patterns.`,
      react: `React is a JavaScript library for building reactive and high-performance user interfaces.<br><br><strong>How I apply it:</strong> I create reusable and dynamic components with great user experience and API integration.`,
      next: `Next.js is a React framework with hybrid rendering, optimized performance, and excellent SEO support.<br><br><strong>Use cases:</strong> I build fast-loading apps with dynamic routing and server-side rendering for organic visibility.`,
      blazor: `Blazor is a Microsoft framework for building interactive web applications using C# instead of JavaScript, enabling code sharing between client and server.<br><br><strong>My experience:</strong> I use Blazor to create rich and dynamic web interfaces leveraging the .NET ecosystem, facilitating integration with APIs and business logic already implemented in C#, providing a consistent and productive development experience.`,
      python: `Python is the language I use for data pipelines, LLM integration and lightweight backend services.<br><br><strong>In practice:</strong> In the Financial Document Extractor, I built the entire extraction, validation and evaluation in Python 3.12, with Pydantic v2 for typed schemas and SQLAlchemy 2 for persistence.`,
      fastapi: `FastAPI is a Python framework for APIs with automatic data validation and documentation generated from type hints.<br><br><strong>In practice:</strong> I used it in the Financial Document Extractor to expose the review queue and each document's diagnosis to the Next.js interface, with Pydantic schemas shared between the API and the pipeline.`,
      postgres: `PostgreSQL is the relational database I use by default for persistence in web and backend projects.<br><br><strong>In practice:</strong> I worked with PostgreSQL in .NET APIs for agricultural telemetry at Spro IT Solutions and, more recently, in the review queue of the Financial Document Extractor, with SQLAlchemy 2 and versioned migrations via Alembic.`,
      ia: `I work with LLMs as a system component, not a black box: structured output, automated evaluation with evals, defense against prompt injection and direct integration with the Anthropic and Gemini SDKs, without an intermediate framework.<br><br><strong>In practice:</strong> In the Financial Document Extractor, confidence in the extraction comes from deterministic validation over the document itself, not from the model, and the escape rate is measured against a custom adversarial corpus. In the Empório da Música support agent, the model converses and decides which tool to call, while prices, stock and order access stay in code, with 20 automated evaluation scenarios. Day to day, I use agent-assisted development driven by written specifications and with review of the output. I hold the Google AI Professional Certificate.`,
      legenda: `Hover over the cards to learn more.`,
      nav: ["Home", "Skills", "Projects", "Experience", "Education"],
      conhecimentosTitulo: "SKILLS",
      heroTexto: `I'm a full-stack developer focused on backend with C# and system integration. On the frontend, I work with modern WinForms (DevExpress), Angular, React and JavaScript. I have experience across the entire project lifecycle — from architecture to delivery — always aiming for robust, functional and user-friendly solutions. More recently, I have been integrating LLMs into systems, with a focus on structured output, deterministic validation and automated evaluation.`,
      heroBotaoContato: "Contact Me",
      heroBotaoCV: "Download CV",
      projetosTitulo: "PROJECTS",
      formacaoTitulo: "EDUCATION & CERTIFICATIONS",
      academicoDivTitle: "Academic Background",
      academicoTitulo: "Bachelor's Degree in Software Engineering",
      academicoData: "Completed Feb/2025",
      academicoDescricao: "Complete degree in Software Engineering with emphasis on systems development, software architecture, agile methodologies, and project management. During my undergraduate studies, I developed practical projects applying modern technologies and engineering best practices.",
      academicoLinkTexto: "View LinkedIn post",
      certificationsDivTitle: "Certifications & Achievements",
      certificacaoTitulo: "Paper Accepted at SBES 2025 (CBSoft)",
      certificacaoEmissor: "Brazilian Computer Society (SBC)",
      certificacaoData: "Jun 2025",
      certificacaoDescricao: "Paper accepted at the XXXIX Brazilian Symposium on Software Engineering (SBES 2025), Brazil's leading event in the field, part of CBSoft (Brazilian Congress on Software). The work presents BitBeak, a gamified educational tool that uses manga narratives to support introductory programming education. The research involves platform development, learning paths, gamification, and empirical evaluation with students using the MEEGA+ model. The presentation was held in-person in Recife, Brazil, in September 2025.",
      certificacaoLinkTexto: "View LinkedIn post",
      certificacaoArtigoTexto: "Read full paper",
      certificacao2Titulo: "Google AI Professional Certificate",
      certificacao2Emissor: "Google, via Coursera",
      certificacao2Data: "Aug 2026",
      certificacao2Descricao: "Google professional certificate made up of seven courses on applying generative AI to work: brainstorming, research, communication, content creation and data analysis. It complements the hands-on LLM experience demonstrated in the Financial Document Extractor project.",
      certificacao2LinkTexto: "View credential"
    }
  };

  function aplicarIdioma(lang) {
    idiomaAtual = lang;

    const navItems = document.querySelectorAll("nav a");
    textos[lang].nav.forEach((text, i) => {
      if (navItems[i]) navItems[i].textContent = text;
    });

    const mobileLinks = document.querySelectorAll(".mobile-nav-link");
    textos[lang].nav.forEach((text, i) => {
      if (mobileLinks[i]) mobileLinks[i].textContent = text;
    });

    const titulo = document.querySelector("#conhecimentos h2");
    if (titulo) titulo.textContent = textos[lang].conhecimentosTitulo;

    const tituloProjetos = document.querySelector("#projetos h2");
    if (tituloProjetos) tituloProjetos.textContent = textos[lang].projetosTitulo;

    document.querySelector("#home p").innerHTML = textos[lang].heroTexto;

    document.querySelectorAll("#home a")[0].textContent = textos[lang].heroBotaoContato;
    document.querySelectorAll("#home a")[1].textContent = textos[lang].heroBotaoCV;

    const ativo = document.querySelector(".conhecimento-card.ativo");
    const key = ativo?.dataset?.tecnologia || "html";
    texto.innerHTML = textos[lang][key] + `<br><br><span class="text-sm text-gray-400">${textos[lang].legenda}</span>`;

    document.getElementById("currentFlag").src = lang === "pt" ? "https://flagcdn.com/16x12/br.png" : "https://flagcdn.com/16x12/gb.png";
    document.getElementById("currentLang").textContent = lang.toUpperCase();

    const tituloExp = document.getElementById("experienciasTitulo");
    if (tituloExp) tituloExp.textContent = lang === "pt" ? "EXPERIÊNCIA" : "EXPERIENCE";
    renderizarExperiencias(lang);

    traduzirFormacao(lang);
    traduzirFooter(lang);
  }

  function traduzirFormacao(lang) {
    const formacaoTitulo = document.getElementById("formacaoTitulo");
    if (formacaoTitulo) formacaoTitulo.textContent = textos[lang].formacaoTitulo;

    const academicoDivTitle = document.getElementById("academicoDivTitle");
    if (academicoDivTitle) academicoDivTitle.textContent = textos[lang].academicoDivTitle;

    const academicoTitulo = document.getElementById("academicoTitulo");
    if (academicoTitulo) academicoTitulo.textContent = textos[lang].academicoTitulo;

    const academicoData = document.getElementById("academicoData");
    if (academicoData) academicoData.textContent = textos[lang].academicoData;

    const academicoDescricao = document.getElementById("academicoDescricao");
    if (academicoDescricao) academicoDescricao.textContent = textos[lang].academicoDescricao;

    const academicoLinkTexto = document.getElementById("academicoLinkTexto");
    if (academicoLinkTexto) academicoLinkTexto.textContent = textos[lang].academicoLinkTexto;

    const certificationsDivTitle = document.getElementById("certificationsDivTitle");
    if (certificationsDivTitle) certificationsDivTitle.textContent = textos[lang].certificationsDivTitle;

    const certificacaoTitulo = document.getElementById("certificacaoTitulo");
    if (certificacaoTitulo) certificacaoTitulo.textContent = textos[lang].certificacaoTitulo;

    const certificacaoEmissor = document.getElementById("certificacaoEmissor");
    if (certificacaoEmissor) certificacaoEmissor.textContent = textos[lang].certificacaoEmissor;

    const certificacaoData = document.getElementById("certificacaoData");
    if (certificacaoData) certificacaoData.textContent = textos[lang].certificacaoData;

    const certificacaoDescricao = document.getElementById("certificacaoDescricao");
    if (certificacaoDescricao) certificacaoDescricao.textContent = textos[lang].certificacaoDescricao;

    const certificacaoLinkTexto = document.getElementById("certificacaoLinkTexto");
    if (certificacaoLinkTexto) certificacaoLinkTexto.textContent = textos[lang].certificacaoLinkTexto;

    const certificacaoArtigoTexto = document.getElementById("certificacaoArtigoTexto");
    if (certificacaoArtigoTexto) certificacaoArtigoTexto.textContent = textos[lang].certificacaoArtigoTexto;

    ["certificacao2Titulo", "certificacao2Emissor", "certificacao2Data", "certificacao2Descricao", "certificacao2LinkTexto"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = textos[lang][id];
    });
  }

  let typed1 = null;
  let typed2 = null;
  let typed3 = null;


  function iniciarTyped(lang) {
  const frases = {
    pt: [
      "Olá, sou Marcos Vinicius,",
      `<span class='text-transparent bg-clip-text inline-block' style='background-image: linear-gradient(90deg, #CF7500, #F0A500);'>Eng. de Software</span> com experiência`,
      `em desenvolvimento <span class='text-transparent bg-clip-text inline-block' style='background-image: linear-gradient(90deg, #CF7500, #F0A500);'>full-stack!</span>`
    ],
    en: [
      "Hi, I'm Marcos Vinicius,",
      `<span class='text-transparent bg-clip-text inline-block' style='background-image: linear-gradient(90deg, #CF7500, #F0A500);'>Software Engineer</span> with experience`,
      `in <span class='text-transparent bg-clip-text inline-block' style='background-image: linear-gradient(90deg, #CF7500, #F0A500);'>full-stack development!</span>`
    ]
  };

  if (typed1) { typed1.destroy(); typed1 = null; }
  if (typed2) { typed2.destroy(); typed2 = null; }
  if (typed3) { typed3.destroy(); typed3 = null; }

  const h1 = document.querySelector("h1");
  h1.innerHTML = `
    <div id="linha1" class="hidden"></div>
    <div id="linha2" class="hidden"></div>
    <div id="linha3" class="hidden"></div>
  `;

  const l1 = document.getElementById("linha1");
  const l2 = document.getElementById("linha2");
  const l3 = document.getElementById("linha3");

  l1.classList.remove("hidden");
  typed1 = new Typed("#linha1", {
    strings: [frases[lang][0]],
    typeSpeed: 45,
    showCursor: false,
    onComplete: () => {
      setTimeout(() => {
        l2.classList.remove("hidden");
        typed2 = new Typed("#linha2", {
          strings: [frases[lang][1]],
          typeSpeed: 40,
          showCursor: false,
          onComplete: () => {
            setTimeout(() => {
              l3.classList.remove("hidden");
              typed3 = new Typed("#linha3", {
                strings: [frases[lang][2]],
                typeSpeed: 40,
                showCursor: false
              });
            }, 150);
          }
        });
      }, 100);
    }
  });
 } 

  let ultimoCard = null;
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      cards.forEach(c => c.classList.remove("hovering", "ativo"));
      card.classList.add("hovering");
      ultimoCard = card;
      const key = card.dataset.tecnologia;
      texto.innerHTML = textos[idiomaAtual][key] + `<br><br><span class="text-sm text-gray-400">${textos[idiomaAtual].legenda}</span>`;
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovering");
      setTimeout(() => {
        const algumCardHover = Array.from(cards).some(c => c.matches(":hover"));
        if (!algumCardHover && ultimoCard) {
          ultimoCard.classList.add("ativo");
        }
      }, 50);
    });
  });

  // Mobile menu
  const hamburger = document.getElementById("menuHamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const hamburgerLines = document.querySelectorAll(".hamburger-line");

  function toggleMobileMenu() {
    const isOpen = !mobileMenu.classList.contains("hidden");
    if (isOpen) {
      mobileMenu.classList.add("hidden");
      hamburgerLines[0].style.transform = "";
      hamburgerLines[1].style.opacity = "";
      hamburgerLines[2].style.transform = "";
    } else {
      mobileMenu.classList.remove("hidden");
      hamburgerLines[0].style.transform = "translateY(7px) rotate(45deg)";
      hamburgerLines[1].style.opacity = "0";
      hamburgerLines[2].style.transform = "translateY(-7px) rotate(-45deg)";
    }
  }

  hamburger.addEventListener("click", toggleMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener("click", toggleMobileMenu));

  const langMenu = document.getElementById("langMenu");
  if (langMenu) {
    langMenu.querySelectorAll("[data-lang]").forEach(item => {
      item.addEventListener("click", () => {
        const lang = item.dataset.lang;
        aplicarIdioma(lang);
        iniciarTyped(lang);

        langMenu.classList.add("hidden");
      });
    });
  }

  const langToggle = document.getElementById("langToggle");

  langToggle.addEventListener("click", () => {
    langMenu.classList.toggle("hidden");
  });


  aplicarIdioma("pt");
  iniciarTyped("pt");
});

// script para o slider de projetos
const wrapper = document.getElementById("projetosWrapper");
const cards = wrapper.querySelectorAll("div[data-id]");
const isMobile = window.innerWidth < 768;
const cardsPorTela = isMobile ? 1 : 2;
const cardWidthPercent = 100 / cardsPorTela;

let slideIndex = cardsPorTela; 

for (let i = 0; i < cardsPorTela; i++) {
  const cloneInicio = cards[i].cloneNode(true);
  const cloneFim = cards[cards.length - 1 - i].cloneNode(true);
  wrapper.appendChild(cloneInicio);
  wrapper.insertBefore(cloneFim, wrapper.firstChild);
}

const todosCards = wrapper.querySelectorAll("div[data-id]");
const totalCards = todosCards.length;

wrapper.style.transform = `translateX(-${slideIndex * cardWidthPercent}%)`;


const totalProjetos = cards.length;
const dotsContainer = document.getElementById("projetosDots");

for (let i = 0; i < totalProjetos; i++) {
  const dot = document.createElement("button");
  dot.className = "w-2 h-2 rounded-full transition-all duration-300 bg-[#555] hover:bg-[#F0A500]";
  dot.addEventListener("click", () => {
    slideIndex = cardsPorTela + i;
    updateSlider();
    updateDots();
  });
  dotsContainer.appendChild(dot);
}

function updateDots() {
  const realIndex = ((slideIndex - cardsPorTela) % totalProjetos + totalProjetos) % totalProjetos;
  dotsContainer.querySelectorAll("button").forEach((dot, i) => {
    dot.classList.toggle("bg-[#F0A500]", i === realIndex);
    dot.classList.toggle("w-4", i === realIndex);
    dot.classList.toggle("bg-[#555]", i !== realIndex);
    dot.classList.toggle("w-2", i !== realIndex);
  });
  const contador = document.getElementById("sliderContador");
  if (contador) contador.textContent = `${realIndex + 1} / ${totalProjetos}`;
}

function updateSlider(animate = true) {
  if (!animate) wrapper.style.transition = "none";
  else wrapper.style.transition = "transform 0.5s ease-in-out";

  wrapper.style.transform = `translateX(-${slideIndex * cardWidthPercent}%)`;
  updateDots();
}

updateDots();

document.getElementById("nextProjeto").addEventListener("click", () => {
  slideIndex++;
  updateSlider();

  if (slideIndex >= totalCards - cardsPorTela) {
    setTimeout(() => {
      slideIndex = cardsPorTela;
      updateSlider(false);
    }, 500);
  }
});

document.getElementById("prevProjeto").addEventListener("click", () => {
  slideIndex--;
  updateSlider();

  if (slideIndex < 0) {
    setTimeout(() => {
      slideIndex = totalCards - cardsPorTela - 1;
      updateSlider(false);
    }, 500);
  }
});

// script para o modal de projetos
const modal = document.getElementById("modalProjeto");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescricao = document.getElementById("modalDescricao");
const modalData = document.getElementById("modalData");
const modalBotoes = document.getElementById("modalBotoes");

const projetos = [
  {
    id: "extrator",
    titulo_pt: "Extrator de Documentos Financeiros",
    titulo_en: "Financial Document Extractor",
    data_pt: "Setembro de 2026",
    data_en: "September 2026",
    descricao_pt: "Pipeline que extrai dados estruturados de documentos financeiros brasileiros — boleto bancário e informe de rendimentos — usando LLM, com uma camada de validação determinística que decide se a extração pode ser aprovada automaticamente ou precisa de revisão humana.<br><br>A ideia central é que a confiança não vem do modelo: perguntar a um LLM o quanto ele acha que acertou não funciona, porque modelos afirmam com convicção coisas que inventaram. Documento financeiro brasileiro carrega verificação matemática embutida — o boleto tem quatro dígitos verificadores e o valor codificado na linha digitável; o informe tem somas que precisam fechar e um saldo de 31/12 que precisa bater com o do ano anterior. A IA lê, a matemática confere, e o que não fecha vai para revisão humana com o motivo apontado.<br><br>O caso da capa mostra isso: um boleto adversarial com R$ 91,01 impresso na página e R$ 9.100,99 codificado na linha digitável. A extração está correta — o modelo leu o que estava impresso; o documento é que mente. A detecção de texto suspeito e a verificação de presença literal aprovam, e só o cruzamento com o dígito verificador reprova. Nos testes com corpus sintético, nenhum dos 28 ataques adversariais contra boletos obteve o efeito pretendido, com 0% de taxa de escape sobre 15 auto-aprovados; nos informes, 1 de 16 ataques passou e a taxa de escape foi 11,1% sobre 18. Como o corpus é sintético e de template único, esses números não preveem o comportamento em documentos reais — o repositório documenta isso nas limitações conhecidas, junto de 12 ADRs e de um corpus adversarial próprio com 15 famílias de ataque.<br><br>Construído com Python 3.12, FastAPI, Pydantic v2, SQLAlchemy 2, Postgres e Alembic, Gemini via SDK direto, pdfplumber, pypdfium2 e Tesseract OCR na ingestão, e interface de revisão em Next.js 15 e Tailwind que mostra qual sinal reprovou e por quê. A demonstração roda em servidor gratuito: dorme por inatividade e leva cerca de 40 segundos para acordar no primeiro acesso.",
    descricao_en: "A pipeline that extracts structured data from Brazilian financial documents — bank slips (boletos) and income statements — using an LLM, with a deterministic validation layer that decides whether an extraction can be auto-approved or needs human review.<br><br>The central idea is that confidence does not come from the model: asking an LLM how sure it is does not work, because models state things they made up with full conviction. Brazilian financial documents carry built-in mathematical verification — a boleto has four check digits and the amount encoded in its typeable line; an income statement has sums that must add up and a December 31 balance that must match the previous year's. The AI reads, the math checks, and whatever does not add up goes to human review with the reason attached.<br><br>The cover shows the case: an adversarial boleto with R$ 91.01 printed on the page and R$ 9,100.99 encoded in the typeable line. The extraction is correct — the model read what was printed; it is the document that lies. Suspicious-text detection and literal-presence verification both pass, and only the check-digit cross-check fails. In tests on a synthetic corpus, none of the 28 adversarial attacks on boletos achieved their intended effect, with a 0% escape rate over 15 auto-approved documents; for income statements, 1 of 16 attacks got through and the escape rate was 11.1% over 18. Since the corpus is synthetic and single-template, these numbers do not predict behavior on real documents — the repository documents this under known limitations, alongside 12 ADRs and a custom adversarial corpus with 15 attack families.<br><br>Built with Python 3.12, FastAPI, Pydantic v2, SQLAlchemy 2, Postgres and Alembic, Gemini through the SDK directly, pdfplumber, pypdfium2 and Tesseract OCR for ingestion, and a review interface in Next.js 15 and Tailwind that shows which signal failed and why. The demo runs on a free-tier server: it sleeps when idle and takes about 40 seconds to wake up on first access.",
    botoes: [
      { label_pt: "Demonstração", label_en: "Live demo", url: "https://extrator-web-47i7.onrender.com", tooltip_pt: "Servidor gratuito: dorme por inatividade e leva ~40s para acordar no primeiro acesso", tooltip_en: "Free-tier server: sleeps when idle and takes ~40s to wake up on first access" },
      { label_pt: "Repositório", label_en: "Repository", url: "https://github.com/marcola20/extrator-docs-financeiros" }
    ]
  },
  {
    id: "emporio",
    titulo_pt: "Agente de Atendimento com IA — Empório da Música",
    titulo_en: "AI Customer Support Agent — Empório da Música",
    data_pt: "Novembro de 2026",
    data_en: "November 2026",
    descricao_pt: "Protótipo de agente de atendimento por mensagem para uma loja de instrumentos musicais (fictícia), feito como desafio técnico de AI Engineer. A assistente, Lia, conversa em português com o tom que o manual da loja pede e resolve o que um atendente resolveria: consulta catálogo, preços, promoções e estoque em tempo real, responde sobre horário, entrega, pagamento, trocas e garantia, aplica essas regras ao pedido do próprio cliente (\"ainda dá para devolver?\") depois de confirmar a identidade dele, e abre um chamado de verdade para a equipe humana quando precisa.<br><br>O princípio do projeto é que a IA conversa e interpreta, e o código garante o que não pode dar errado. Preço, promoção, parcelamento, contagem de dias e acesso aos pedidos são calculados em Python, por ferramentas determinísticas; o modelo só decide qual ferramenta chamar e como explicar o resultado. Por isso, mesmo uma tentativa de prompt injection bem-sucedida não libera dados de outro cliente nem desconto: o controle de acesso está nas ferramentas, não no prompt. Há também uma checagem na saída: se a resposta promete um chamado que não foi aberto, o agente corrige sozinho antes de o cliente ver.<br><br>O agente é um loop explícito de tool calling, sem LangChain, e fala o formato OpenAI Chat Completions, então trocar de provedor (Gemini, OpenAI, Ollama) é questão de configuração. A qualidade é medida: 20 cenários de avaliação automática (todos aprovados, incluindo pedido de outro cliente, promoção vencida e prompt injection), 96 testes unitários sem rede e conversas reais documentadas no repositório, junto das decisões técnicas e de como o desenvolvimento foi feito com Claude Code.",
    descricao_en: "A prototype of a text-message customer support agent for a (fictional) musical instrument store, built as an AI Engineer technical challenge. The assistant, Lia, talks in Portuguese with the tone the store's manual asks for and handles what a human agent would: it looks up catalog, prices, promotions and stock in real time, answers questions about hours, shipping, payment, returns and warranty, applies those rules to the customer's own order (\"can I still return it?\") after verifying their identity, and opens a real ticket for the human team when needed.<br><br>The guiding principle is that the AI converses and interprets, while code guarantees what must not go wrong. Prices, promotions, installments, day counts and access to orders are computed in Python by deterministic tools; the model only decides which tool to call and how to explain the result. That is why even a successful prompt injection cannot unlock another customer's data or a discount: access control lives in the tools, not in the prompt. There is also an output check: if a reply promises a ticket that was never opened, the agent corrects itself before the customer sees it.<br><br>The agent is an explicit tool-calling loop, without LangChain, speaking the OpenAI Chat Completions format, so switching providers (Gemini, OpenAI, Ollama) is a configuration change. Quality is measured: 20 automated evaluation scenarios (all passing, including another customer's order, an expired promotion and prompt injection), 96 offline unit tests and real conversations documented in the repository, along with the technical decisions and how development was done with Claude Code.",
    botoes: [
      { label_pt: "Repositório", label_en: "Repository", url: "https://github.com/marcola20/emporio-da-musica-agent" },
      { label_pt: "Avaliação", label_en: "Evaluation", url: "https://github.com/marcola20/emporio-da-musica-agent/blob/main/evals/results/results.md" },
      { label_pt: "Conversas de exemplo", label_en: "Example conversations", url: "https://github.com/marcola20/emporio-da-musica-agent/tree/main/examples" }
    ]
  },
  {
    id: "cbfv",
    titulo_pt: "CBFV — Plataforma da Liga",
    titulo_en: "CBFV — League Platform",
    data_pt: "Outubro de 2025 — em evolução contínua",
    data_en: "October 2025 — continuously evolving",
    descricao_pt: "Começou como um simulador de draft e virou o site onde a liga CBFV vive o dia a dia: draft ao vivo, mercado de transferências, Série A e B, Copa, Supercopa, bolão, álbum de figurinhas, estatísticas e a história de todas as temporadas. Os treinadores entram com um token do próprio clube e acompanham tudo em tempo real; os administradores conduzem a temporada por um painel próprio.<br><br>O que tem lá dentro: draft ao vivo com telão, lista de desejos, escolha automática e proteção de jogadores; mercado com negociações, ciclos de janela, orçamento por clube, termômetro e histórico de transferências; classificação com recorte casa/fora, mata-mata, sorteio da Copa ao vivo, reta final com os selos de \"garantido\" e \"impossível\" considerando os confrontos diretos, recordes, power ranking, Hall da Fama e carreira de cada treinador; página de cada jogador com valor, origem e estatísticas; uma Central com destaques e um Plantão de notícias gerado a partir dos jogos. São mais de 90 telas.<br><br>Feito com C# .NET 8 e Blazor Server, Entity Framework Core com PostgreSQL e migrations versionadas, e SignalR para o que é ao vivo (draft, mercado, telão e sorteio). A arquitetura separa regras puras (desempate, calendário, suspensões, loteria) do acesso a dados e das telas, a API tem autenticação por token com bloqueio contra força bruta, e o deploy é por Docker no Render a cada push. Os resultados das partidas chegam automaticamente pelo Auto_PES21, que joga, lê e envia cada jogo. São mais de 780 commits desde outubro de 2025, com a liga usando de verdade.",
    descricao_en: "It started as a draft simulator and became the site where the CBFV league lives day to day: live draft, transfer market, Série A and B, Cup, Super Cup, prediction pool, sticker album, statistics and the history of every season. Coaches log in with their own club's token and follow everything in real time; admins run the season from their own panel.<br><br>What's inside: a live draft with a big-screen view, wishlist, auto-pick and player protection; a market with negotiations, transfer windows, club budgets, a market thermometer and transfer history; standings with home/away splits, knockout rounds, a live Cup draw, a run-in view with \"clinched\" and \"eliminated\" badges that account for head-to-head games, records, power ranking, Hall of Fame and each coach's career; a page for every player with value, origin and stats; a hub with highlights and a news feed generated from the matches. Over 90 screens in all.<br><br>Built with C# .NET 8 and Blazor Server, Entity Framework Core with PostgreSQL and versioned migrations, and SignalR for everything live (draft, market, big screen and draw). The architecture separates pure rules (tiebreakers, calendar, suspensions, lottery) from data access and UI, the API uses token authentication with brute-force lockout, and deployment is via Docker on Render on every push. Match results arrive automatically from Auto_PES21, which plays, reads and submits each game. Over 780 commits since October 2025, with the league using it for real.",
    botoes: [
      { label_pt: "Site", label_en: "Site", url: "https://cbfv-app.onrender.com/", tooltip_pt: "Servidor gratuito: pode levar ~40s para acordar no primeiro acesso", tooltip_en: "Free-tier server: may take ~40s to wake up on first access" },
      { label_pt: "Repositório", label_en: "Repository", url: "https://github.com/marcola20/Fc25_Draft" }
    ]
  },
  {
    id: "autopes",
    titulo_pt: "Auto_PES21 — Robô de Partidas e Publicação",
    titulo_en: "Auto_PES21 — Match and Publishing Robot",
    data_pt: "Setembro de 2026",
    data_en: "September 2026",
    descricao_pt: "Robô (RPA) que faz sozinho o trabalho de uma rodada inteira da liga CBFV: abre o PES 2021, navega pelos menus, joga as partidas CPU x CPU uma atrás da outra gravando cada uma, lê o final de cada vídeo para tirar placar, gols, assistências, cartões, substituições e notas, envia os resultados para o site da liga e sobe os vídeos no YouTube programados como estreia, com título, descrição, miniatura e playlist.<br><br>O robô enxerga a tela por visão computacional (comparação de pixels com telas de referência e leitura do formato das letras destacadas) para saber onde está antes de apertar qualquer tecla, e lê os textos do jogo com o OCR do próprio Windows. Como o OCR erra nomes (\"Petrbech\" em vez de \"Petr Čech\"), cada nome é corrigido pelo elenco do time vindo do site; quando fica em dúvida, o resultado sai marcado para revisão com o motivo, em vez de ser enviado errado. O envio tem modo de simulação e o site pode segurar o resultado até um admin liberar.<br><br>Para quem não programa, há um painel no navegador que monta a fila de jogos a partir das rodadas do site, roda cada etapa com um clique e mostra a saída na tela. O projeto é distribuído como pacote pronto, com Python embutido, publicado em Releases no GitHub, e o painel avisa quando sai versão nova e atualiza com um clique, preservando os dados de quem usa. Feito em Python (Pillow, PyDirectInput, OCR do Windows via WinRT, Playwright para o YouTube Studio) e painel em HTML, CSS e JavaScript.",
    descricao_en: "A robot (RPA) that does a whole CBFV league round on its own: it opens PES 2021, navigates the menus, plays CPU vs CPU matches back to back while recording each one, reads the end of every video to extract score, goals, assists, cards, substitutions and ratings, submits the results to the league site and uploads the videos to YouTube scheduled as premieres, with title, description, thumbnail and playlist.<br><br>The robot sees the screen through computer vision (pixel comparison against reference screens and matching the shape of highlighted text) to know where it is before pressing any key, and reads the game's text with Windows' built-in OCR. Since OCR gets names wrong (\"Petrbech\" instead of \"Petr Čech\"), each name is corrected against the team's squad from the site; when in doubt, the result is flagged for review with the reason instead of being sent wrong. Submission has a dry-run mode and the site can hold results until an admin releases them.<br><br>For non-programmers there is a browser panel that builds the match queue from the site's rounds, runs each step with one click and shows the output on screen. The project ships as a ready-to-use package with embedded Python, published in GitHub Releases, and the panel announces new versions and updates with one click, keeping the user's data. Built in Python (Pillow, PyDirectInput, Windows OCR via WinRT, Playwright for YouTube Studio) with the panel in HTML, CSS and JavaScript.",
    botoes: [
      { label_pt: "Repositório", label_en: "Repository", url: "https://github.com/marcola20/Auto_PES21" },
      { label_pt: "Releases", label_en: "Releases", url: "https://github.com/marcola20/Auto_PES21/releases/latest" }
    ]
  },
  {
    id: "bitbeak",
    titulo_pt: "BitBeak",
    titulo_en: "BitBeak",
    data_pt: "25 de novembro de 2024",
    data_en: "November 25, 2024",
    descricao_pt: "BitBeak é uma ferramenta gamificada criada para apoiar o ensino de programação. Inspirado em plataformas como o Duolingo, o projeto busca tornar o aprendizado mais leve, acessível e progressivo, especialmente para iniciantes que enfrentam dificuldades nas primeiras disciplinas de programação.<br><br>A plataforma oferece um ambiente interativo onde os usuários podem se cadastrar, fazer login e iniciar uma trilha de aprendizagem dividida em níveis. Cada nível conta com quizzes interativos, desafios para jogar com amigos, e um diferencial visual: mangás educativos que explicam os conceitos de forma contextualizada e envolvente. O sistema de progresso é baseado em experiência e ranking, promovendo engajamento contínuo.<br><br>No backend, foi utilizado C# com .NET e Entity Framework, escolhidos pela robustez, tipagem forte e facilidade de manter regras de negócio complexas com segurança e performance. Já no frontend, o React foi adotado pela sua flexibilidade, componentização e excelente desempenho em interfaces ricas e dinâmicas.<br><br>O projeto foi apresentado no BES 2025 – Simpósio Brasileiro de Engenharia de Software, parte do CBSoft, o maior congresso brasileiro de software.",
    descricao_en: "BitBeak is a gamified tool designed to support programming education. Inspired by platforms like Duolingo, the project aims to make learning more accessible, progressive, and enjoyable—especially for beginners struggling with early programming subjects.<br><br>The platform provides an interactive environment where users can register, log in, and follow a structured learning path divided into levels. Each level features interactive quizzes, friend challenges, and a visual highlight: educational manga that explains programming concepts through engaging storytelling. Progress is based on experience points and ranking, encouraging ongoing engagement.<br><br>The backend was built using C# with .NET and Entity Framework, chosen for their robustness, strong typing, and ability to enforce complex business rules with reliability and performance. On the frontend, React was used for its flexibility, component-based architecture, and high performance in dynamic UIs.<br><br>The project was presented at BES 2025 – Brazilian Symposium on Software Engineering, part of CBSoft, Brazil's largest software conference.",
    botoes: [
      { label_pt: "Repositório", label_en: "Repository", url: "https://github.com/orgs/BitBeak/repositories" },
      { label_pt: "Mangás", label_en: "Mangas", href: "assets/Bit_Beak_Mangas.pdf", download: true  },
      { label_pt: "Figma", label_en: "Figma", url: "https://www.figma.com/proto/YJ1eG3DorMAs232tWcoe26/BitBeak?node-id=768-65&p=f&t=GUEUXawIudNkuFAy-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
      { label_pt: "Post LinkedIn", label_en: "LinkedIn Post", url: "https://www.linkedin.com/posts/marcosviniciussa_h%C3%A1-cerca-de-um-m%C3%AAs-realizei-a-%C3%BAltima-apresenta%C3%A7%C3%A3o-activity-7275892876104880128-HLgd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-148oBRSguSUWgqHnMYqdzwLz5oxvMhnQ" },
      { label_pt: "Artigo", label_en: "Paper", url: "https://sol.sbc.org.br/index.php/sbes/article/view/37021/36806" }
    ]
  },
  {
    id: "motive",
    titulo_pt: "Motive Estética Automotiva",
    titulo_en: "Motive Estética Automotiva",
    data_pt: "17 de novembro de 2026",
    data_en: "November 17, 2026",
    descricao_pt: "Site institucional para a Motive Estética Automotiva, de Campina Grande do Sul (PR), com o objetivo de transformar visitas em agendamentos. Fiz todo o processo, do layout à publicação. <br><br>Construído com HTML, CSS e JavaScript puros, sem frameworks. O site apresenta os serviços e as duas formas de atendimento (no espaço próprio ou a domicílio), tem um comparador antes/depois que se arrasta com o dedo ou o mouse, uma galeria com lightbox e botões que levam direto ao WhatsApp para agendar. <br><br>Também cuidei de performance e SEO local: imagens em WebP com versões por tamanho de tela, carregamento sob demanda, fontes hospedadas no próprio site, dados estruturados (Schema.org), sitemap e prévia personalizada para compartilhamento.",
    descricao_en: "Institutional website for Motive Estética Automotiva, a car detailing business in Campina Grande do Sul (Brazil), built to turn visits into bookings. I handled the whole process, from layout to launch. <br><br>Built with plain HTML, CSS, and JavaScript, no frameworks. The site presents the services and both service options (at the studio or at the customer's home), includes a draggable before/after comparison slider, a lightbox gallery, and buttons that go straight to WhatsApp for booking. <br><br>I also focused on performance and local SEO: WebP images with responsive sizes, lazy loading, self-hosted fonts, structured data (Schema.org), a sitemap, and a custom link preview for sharing.",
    botoes: [
      { label_pt: "Site", label_en: "Site", url: "https://motiveestetica.netlify.app/" }
    ]
  },
  {
    id: "rsvp",
    titulo_pt: "RSVP Aniversário",
    titulo_en: "Birthday RSVP",
    data_pt: "21 de janeiro de 2026",
    data_en: "January 21, 2026",
    descricao_pt: "Sistema simples e divertido de confirmação de presença para festas de aniversário infantil com tema de dinossauros. O projeto foi criado para facilitar o processo de RSVP, permitindo que as famílias confirmem a presença de múltiplos convidados de forma intuitiva, separando automaticamente entre adultos e crianças.<br><br>A aplicação conta com um formulário interativo, design responsivo otimizado para dispositivos móveis, e elementos visuais temáticos como nuvens flutuantes, balões subindo e dinossauros animados que criam uma experiência visual envolvente e lúdica. A integração opcional com Google Sheets permite armazenar e gerenciar os dados dos convidados de forma prática.<br><br>Desenvolvido com HTML5, CSS3 e JavaScript vanilla, o projeto prioriza simplicidade e performance, sem dependências externas. As cores são definidas em variáveis CSS, facilitando a personalização visual. Utilizei Google Fonts para tipografia customizada (Lilita One e Fredoka), trazendo identidade única ao projeto.",
    descricao_en: "A simple and fun confirmation system for children's birthday parties with a dinosaur theme. The project was created to streamline the RSVP process, allowing families to confirm attendance for multiple guests intuitively, automatically separating adults and children.<br><br>The application features an interactive form, responsive design optimized for mobile devices, and themed visual elements such as floating clouds, rising balloons, and animated dinosaurs that create an engaging and playful visual experience. Optional integration with Google Sheets allows for practical storage and management of guest data.<br><br>Built with HTML5, CSS3, and vanilla JavaScript, the project prioritizes simplicity and performance without external dependencies. Colors are defined using CSS variables, making visual customization easy. I used Google Fonts for custom typography (Lilita One and Fredoka), bringing a unique identity to the project.",
    botoes: [
      { label_pt: "Repositório", label_en: "Repository", url: "https://github.com/marcola20/rsvp-aniversario" }
    ]
  },
  {
    id: "turnover",
    titulo_pt: "Turnover League",
    titulo_en: "Turnover League",
    data_pt: "Maio de 2026",
    data_en: "May 2026",
    descricao_pt: "Turnover League é uma plataforma completa de gerenciamento de liga de fantasia esportiva, com foco em draft, gestão de elenco e trocas entre franquias. O sistema foi desenvolvido para ligas privadas que buscam uma experiência organizada e profissional.<br><br>A plataforma oferece um sistema de draft ao vivo com salas dedicadas por liga, controle de salary cap por franquia, mercado de agentes livres, sistema de trocas entre times com validação de regras, e perfis personalizados de jogadores com badges de personalidade que influenciam decisões táticas.<br><br>Desenvolvido com C# .NET 10 e Blazor Server, o projeto explora comunicação em tempo real via SignalR para o draft ao vivo, arquitetura em camadas (Domain, Infrastructure, Web) e integração com banco de dados relacional via Entity Framework Core. O resultado é uma ferramenta robusta, escalável e pronta para uso em ligas reais.",
    descricao_en: "Turnover League is a complete fantasy sports league management platform focused on drafts, roster management, and trades between franchises. The system was designed for private leagues looking for an organized and professional experience.<br><br>The platform features a live draft system with dedicated rooms per league, franchise salary cap control, free agency market, a trade system with rule validation, and custom player profiles with personality badges that influence tactical decisions.<br><br>Built with C# .NET 10 and Blazor Server, the project leverages real-time communication via SignalR for the live draft, a layered architecture (Domain, Infrastructure, Web), and relational database integration via Entity Framework Core. The result is a robust, scalable tool ready for use in real leagues.",
    botoes: [
      { label_pt: "Site", label_en: "Site", url: "https://turnover-league.onrender.com/" },
      { label_pt: "Repositório", label_en: "Repository", url: "https://github.com/marcola20/Turnover-League" }
    ]
  }
];

document.querySelectorAll("#projetosWrapper > div").forEach(container => {
  const card = container.querySelector(".group");
  if (!card) return;

  card.addEventListener("click", () => {
    const projetoId = container.dataset.id;
    const projeto = projetos.find(p => p.id === projetoId);

    if (!projeto) return;

    modalTitulo.textContent = idiomaAtual === "pt" ? projeto.titulo_pt : projeto.titulo_en;
    modalDescricao.innerHTML = idiomaAtual === "pt" ? projeto.descricao_pt : projeto.descricao_en;
    modalData.textContent = idiomaAtual === "pt" ? projeto.data_pt : projeto.data_en;
    modalBotoes.innerHTML = "";

    projeto.botoes.forEach(botao => {
      const btn = document.createElement("a");
      btn.className = "bg-[#F0A500] text-black px-4 py-2 rounded font-medium text-sm hover:bg-[#F0B433] transition";
      btn.textContent = idiomaAtual === "pt" ? botao.label_pt : botao.label_en;

      if (botao.url) {
        btn.href = botao.url;
        btn.target = "_blank";
      } else if (botao.href) {
        btn.href = botao.href;
        if (botao.download) {
          btn.setAttribute("download", "");
        }
      } else if (botao.tooltip_pt || botao.tooltip_en) {
        btn.classList.add("cursor-not-allowed", "opacity-60", "relative");
      }

      if (botao.tooltip_pt || botao.tooltip_en) {
        btn.setAttribute("title", idiomaAtual === "pt" ? botao.tooltip_pt : botao.tooltip_en);
      }

      modalBotoes.appendChild(btn);
    });


    modal.classList.remove("hidden");
  });
});

document.getElementById("fecharModal").addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});

const experiencias = [
  {
    id: "azguidance",
    empresa: "AZ Guidance",
    icon: "icons/azguidance_logo.png",
    cargo_pt: "Engenheiro de Software na ",
    cargo_en: "Software Engineer at ",
    data_pt: "Dez 2024 — Atualmente",
    data_en: "Dec 2024 — Present",
    descricao_pt: `Atuo como engenheiro de software especializado em aplicações desktop desenvolvidas com C#, WinForms e DevExpress, criando soluções robustas, escaláveis e de alta performance voltadas ao setor financeiro. Sou responsável por projetar arquiteturas eficientes, modernizar sistemas legados, otimizar fluxos internos e integrar serviços via WebServices (REST/SOAP). Também colaboro na criação de interfaces ricas com componentes personalizados, sempre aplicando boas práticas de codificação e metodologias ágeis para garantir qualidade, manutenção e evolução contínua dos projetos. Uso IA generativa no dia a dia do desenvolvimento, para análise de código, geração de documentação, identificação de bugs, refatoração e apoio a decisões de arquitetura, sempre com revisão do resultado.`,
    descricao_en: `I work as a software engineer specialized in desktop applications using C#, WinForms, and DevExpress, building robust, scalable, and high-performance solutions for the financial sector. I’m responsible for designing efficient architectures, modernizing legacy systems, optimizing internal workflows, and integrating services through WebServices (REST/SOAP). I also contribute to the development of rich interfaces with custom components, applying clean code practices and agile methodologies to ensure quality, maintainability, and continuous improvement. I use generative AI in day-to-day development, for code analysis, documentation, bug finding, refactoring and support in architecture decisions, always reviewing the output.`,
  },
  {
    id: "inspire",
    empresa: "Inspire Tech Company",
    icon: "icons/inspire_logo.png",
    cargo_pt: "Engenheiro de Software na ",
    cargo_en: "Software Engineer at ",
    data_pt: "Abr 2024 — Dez 2024",
    data_en: "Apr 2024 — Dec 2024",
    descricao_pt: `Atuei como desenvolvedor full stack em todo o ciclo de vida dos projetos, desde a análise inicial e definição de requisitos até o design, desenvolvimento e entrega final. Trabalhei com tecnologias modernas de front-end e back-end, contribuindo na construção de sistemas web responsivos, eficientes e alinhados aos objetivos estratégicos da empresa. Tive participação ativa na criação de interfaces intuitivas, integração com APIs e aplicação de boas práticas de desenvolvimento para garantir escalabilidade e manutenibilidade dos produtos.`,
    descricao_en: `Worked as a full-stack developer throughout the entire project lifecycle — from initial analysis and requirement gathering to design, development, and final delivery. Used modern front-end and back-end technologies to build responsive and efficient web systems aligned with the company's strategic goals. Actively contributed to creating intuitive interfaces, integrating APIs, and applying best development practices to ensure scalability and maintainability.`
  },
  {
    id: "spro",
    empresa: "Spro IT Solutions",
    icon: "icons/spro_logo.png",
    cargo_pt: "Desenvolvedor Back-End na ",
    cargo_en: "Back-End Developer at ",
    data_pt: "Jul 2022 — Abr 2024",
    data_en: "Jul 2022 — Apr 2024",
    descricao_pt: `Atuei no desenvolvimento de APIs robustas em C# .NET integradas a bancos de dados PostgreSQL para um sistema de IoT voltado à telemetria agrícola. Participei da implantação de soluções em ambiente Docker, garantindo escalabilidade e portabilidade. Também fui responsável pela integração dos dados com plataformas web (React + Next.js) e aplicações mobile (React Native), promovendo a visualização eficiente das informações em tempo real.`,
    descricao_en: `Worked on the development of robust APIs in C# .NET integrated with PostgreSQL databases for an IoT system focused on agricultural telemetry. Contributed to deploying scalable and portable solutions using Docker. Also handled data integration with web platforms (React + Next.js) and mobile applications (React Native), enabling real-time and efficient data visualization.`
  }
];

function renderizarExperiencias(lang) {
  const wrapper = document.getElementById("experienciasWrapper");
  if (!wrapper) return;

  wrapper.innerHTML = experiencias.map(exp => `
    <div class="flex flex-row md:flex-row gap-4 sm:gap-6 items-start">
      <img src="${exp.icon}" alt="${exp.empresa}" class="w-6 h-6 sm:w-12 sm:h-12 object-contain mt-1"/>
      <div class="flex-1">
        <div class="flex justify-between flex-wrap items-center gap-x-2">
          <h3 class="text-base sm:text-2xl font-bold text-white">
            ${lang === "pt" ? exp.cargo_pt : exp.cargo_en}
            <span class="bg-gradient-to-r from-[#F0A500] to-[#CF7500] text-transparent bg-clip-text">
              ${exp.empresa}
            </span>
          </h3>
          <p class="text-xs sm:text-sm text-[#8491A0]">${lang === "pt" ? exp.data_pt : exp.data_en}</p>
        </div>
        <p class="text-[#C5C5C5] mt-3 text-xs sm:text-sm leading-relaxed text-justify">${lang === "pt" ? exp.descricao_pt : exp.descricao_en}</p>
      </div>
    </div>
  `).join("");
}

 function traduzirFooter(lang) {
  const contatoTitulo = document.getElementById("contatoTitulo");
  if (contatoTitulo) {
    contatoTitulo.textContent = lang === "pt" ? "ENTRE EM CONTATO" : "GET IN TOUCH";
  }
  const cnpjTexto = document.getElementById("cnpjTexto");
  if (cnpjTexto) {
    cnpjTexto.textContent = lang === "pt" ? "Atendo como pessoa jurídica" : "Registered business in Brazil";
  }
}

// Back to top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("hidden");
    backToTop.classList.add("flex");
  } else {
    backToTop.classList.add("hidden");
    backToTop.classList.remove("flex");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(isDark) {
  document.body.classList.toggle("light-mode", !isDark);
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme !== "light");

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light-mode");
  applyTheme(isLight);
});

// Fade-in on scroll
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll("section, footer").forEach(el => {
  el.classList.add("fade-section");
  fadeObserver.observe(el);
});

// Active nav link on scroll
const secoes = ["home", "conhecimentos", "projetos", "experiencias", "formacao"];

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    const idx = secoes.indexOf(id);
    if (idx === -1) return;

    document.querySelectorAll("nav a").forEach((a, i) => {
      a.classList.toggle("nav-ativo", i === idx);
    });
    document.querySelectorAll(".mobile-nav-link").forEach((a, i) => {
      a.classList.toggle("nav-ativo", i === idx);
    });
  });
}, { threshold: 0.4 });

secoes.forEach(id => {
  const el = document.getElementById(id);
  if (el) navObserver.observe(el);
});
