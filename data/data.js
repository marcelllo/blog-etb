export default function data() {
  const schoolSubjects = [
    {
      id: "5fbfe6d74c7b0000cc007c38",
      slug: "info-i",
      name: "Informática I",
      description:
        "Matéria de informática básica: Introdução à informática, Pacote Office e Manual ABNT para documentos",
    },
    {
      id: "5fbfe6d74c7b0000cc007c39",
      slug: "logica",
      name: "Estrutura de Dados e Lógica de Programação",
      description:
        "Matéria de lógica de programação: Apostilas, Compiladores e listas de exercícios",
    },
    {
      id: "5fbfe6d74c7b0000cc007c40",
      slug: "ltp-i",
      name: "Linguagem Técnica de Programação I",
      description:
        "Apostilas e Videoaulas de introdução à programação - linguagem JAVA",
    },
    {
      id: "5fbfe6d74c7b0000cc007c41",
      slug: "ltp-ii",
      name: "Linguagem Técnica de Programação II",
      description:
        "Apostilas e Videoaulas de programação JAVA - Orientação à Objetos",
    },
    {
      id: "5fbfe6d74c7b0000cc007c42",
      slug: "ltp-iii",
      name: "Linguagem Técnica de Programação III",
      description: "Apostilas e Videoaulas de programação JAVA para WEB",
    },
  ];
  const sections = [
		{
			id: "5fbfe6d74c7b0000cc007c88",
			name: "Plano de Ensino",
			schoolSubjectId: "5fbfe6d74c7b0000cc007c38",
			files: [
				{url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2014/08/PLANO_DE_ENSINO_-INFORM%C3%81TICA-APLICADA.pdf", type: "pdf"}
			]
		},
		{
			id: "5fbfe6d74c7b0000cc007d98",
			name: "Material",
			schoolSubjectId: "5fbfe6d74c7b0000cc007c38",
			vertical: true,
			files: [
				{name: "Apostila", url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2014/08/Programas_Aplicativos_COR_CAPA_20140728.pdf", type: "pdf"},
				{name: "Resumo da evolução tecnológica", url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/03/Aula-01.pptx", type: "ppt"},
				{name: "Lista de Exercícios de Word", url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2014/09/Exercicios_Word_2003.pdf", type: "pdf"},
				{name: "Manual ABNT", url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2014/08/Manual_TCC.pdf", type: "pdf"},
			]
		},
    {
      id: "qwe123123",
      name: "Aplicativos",
			schoolSubjectId: "5fbfe6d74c7b0000cc007c39",
      files: [
        {
          id: "qwe123",
					name: "VisualG",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/08/visualgv25.zip",
          type: "zip",
        },
        {
          id: "qwe124",
          name: "PascalZim",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/08/pascalzim.zip",
          type: "zip"
        },
        {
          id: "qwe123",
          name: "Dev C++",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/08/Dev-Cpp.zip",
          type: "zip"
        },
      ],
    },
    {
      id: "qwe123456",
      name: "Plano de ensino",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c39",
      files: [
        {
          name: null,
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/00-Plano-de-Ensino.pdf",
          type: "pdf",
        },
      ],
    },
    {
      id: "qwe123457",
      name: "Apostila - VisualG + Pascal",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c39",
      files: [
        {
          name: null,
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/00-Apostila-Completa.pdf",
          type: "pdf",
        },
      ],
    },
    {
      id: "qwe123458",
      name: "Apostila - VisualG + C",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c39",
      files: [
        {
          name: null,
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/Apostila-C-ETB.pdf",
          type: "pdf",
        },
      ],
    },
    {
      id: "qwe123459",
			name: "Listas de Exercícios",
			vertical: true,
      schoolSubjectId: "5fbfe6d74c7b0000cc007c39",
      files: [
        {
          name: "Lista 01 - Estrutura Sequencial",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/EXERC%C3%8DCIOS-LISTA-1-ESTRUTURA-SEQUENCIAL-1-SEMESTRE-2017.docx",
          type: "word",
        },
        {
          name: "Lista 02 - Estrutura Condicional",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/10/EXERC%C3%8DCIOS-LISTA-3-ESTRUTURA-REPETI%C3%87%C3%83O-2-SEMESTRE-2014-eletronica.doc",
          type: "word",
        },
        {
          name: "Lista 03 - Estrutura de Repetição",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/10/EXERC%C3%8DCIOS-LISTA-3-ESTRUTURA-REPETI%C3%87%C3%83O-2-SEMESTRE-2014-eletronica.doc",
          type: "word",
        },
      ],
    },
    {
      id: "qwe123460",
      name: "Exemplos",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c39",
      files: [
        {
          name: "Aula 01 - Exemplo 01",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/Aula01.zip",
          type: "zip",
        },
        {
          name: "Aula 01 - Exemplo 03",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/Aula01Ex03.zip",
          type: "zip",
        },
        {
          name: "Calculadora 01",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/Calculadora.zip",
          type: "zip",
        },
      ],
    },
  ];

  const getAllSchoolSubjects = () => {
    return schoolSubjects;
  };

  const getSchoolSubject = (slug) => {
    return schoolSubjects.find((s) => s.slug === slug);
  };

  const getSections = (schoolSubjectId) => {
    return sections.filter((s) => s.schoolSubjectId === schoolSubjectId);
  };

  return {
    getAllSchoolSubjects,
    getSchoolSubject,
    getSections,
  };
}
