function trocarConteudo(conteudoID) {
  event.preventDefault(); // Impede o comportamento padrão do link ou botão

  let conteudoHTML = ''; // Variável que vai guardar o conteúdo a ser exibido

  switch (conteudoID) {
    case 'conteudo1': // Currículo
      conteudoHTML = `
        <h2>Curriculum</h2>
        <p><strong>Nome:</strong> Caio S. R. Zein</p>
        <p><strong>Idade:</strong> 18 anos</p>
        <p><strong>Objetivo:</strong> Desenvolvimento Front-End | Web Design | Back End</p>
        <p><strong>Formação:</strong></p>
        <ul style="text-align: left; display: inline-block;">
          <li>Graduação em Análise e Desenvolvimento de Sistemas – UNINTER (em andamento)</li>
          <li>Técnico em Análise e Desenvolvimento de Sistemas – SENAI (2023–2024)</li>
          <li>Ensino Médio – SESI 165</li>
        </ul>
        <p><strong>Contato:</strong> caiozein07@gmail.com | (19) 97135-5288</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/caio-zein" target="_blank">caio-zein</a></p>
      `;
      break;

    case 'conteudo2': // Sobre mim
      conteudoHTML = `
        <h2>Sobre Mim</h2>
        <p>Sou Caio Zein, estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e inovação.</p>
        <p>Tenho conhecimentos em HTML5, CSS3, JavaScript, Python e Java, com foco em desenvolvimento front-end.</p>
        <p>Já participei de projetos acadêmicos e cursos sobre Blockchain, Indústria 4.0, Web 3.0 e Power BI.</p>
        <p>Busco sempre evoluir, aprender rápido e contribuir com soluções criativas e eficientes para o mundo digital.</p>
      `;
      break;

    case 'conteudo3': // Perfil
      conteudoHTML = `
        <h2>Perfil</h2>
        <img src="./assets/profile.jpeg" alt="Foto de perfil" style="
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #000;
          box-shadow: 2px 2px 6px rgba(0,0,0,0.3);
          margin-bottom: 15px;
        " />
        <ul style="text-align: left; display: inline-block;">
          <li><strong>Nome:</strong> Caio S. R. Zein</li>
          <li><strong>Idade:</strong> 18 anos</li>
          <li><strong>Cidade:</strong> Socorro – SP</li>
          <li><strong>Idiomas:</strong> Inglês intermediário</li>
          <li><strong>Disponibilidade:</strong> Remoto ou híbrido</li>
          <li><strong>CNH:</strong> Categoria A</li>
          <li><strong>Habilidades:</strong> Proatividade, trabalho em equipe, organização, comunicação</li>
        </ul>
      `;
      break;

    case 'conteudo4': // Página inicial
      conteudoHTML = `
        <h2>Bem-vindo!</h2>
        <p>Este é o portfólio de <strong>Caio Zein</strong>.</p>
        <p>Utilize os botões acima para navegar entre meu currículo, perfil profissional e histórico pessoal.</p>
        <p>Sou estudante da área de TI, buscando oportunidades de estágio e crescimento profissional no desenvolvimento front-end.</p>
      `;
      break;

    default:
      conteudoHTML = `<p>© 2025 Caio Zein. Todos os direitos reservados.</p>`; // Caso não encontre o conteúdo
  }

  // Substitui o conteúdo da div com o ID "conteudo"
  document.getElementById('conteudo').innerHTML = conteudoHTML;
}
