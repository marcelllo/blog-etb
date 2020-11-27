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
        {
          id: "5fbfe6d74c7b0000cc007c88",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2014/08/PLANO_DE_ENSINO_-INFORM%C3%81TICA-APLICADA.pdf",
          type: "pdf",
        },
      ],
    },
    {
      id: "5fbfe6d74c7b0000cc007d98",
      name: "Material",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c38",
      vertical: true,
      files: [
        {
          id: "5fbfe6d74c7b0000cc007d981",
          name: "Apostila",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2014/08/Programas_Aplicativos_COR_CAPA_20140728.pdf",
          type: "pdf",
        },
        {
          id: "5fbfe6d74c7b0000cc007d982",
          name: "Resumo da evolução tecnológica",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/03/Aula-01.pptx",
          type: "ppt",
        },
        {
          id: "5fbfe6d74c7b0000cc007d983",
          name: "Lista de Exercícios de Word",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2014/09/Exercicios_Word_2003.pdf",
          type: "pdf",
        },
        {
          id: "5fbfe6d74c7b0000cc007d984",
          name: "Manual ABNT",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2014/08/Manual_TCC.pdf",
          type: "pdf",
        },
      ],
    },
    {
      id: "qwe123123",
      name: "Aplicativos",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c39",
      files: [
        {
          id: "qwe12312301",
          name: "VisualG",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/08/visualgv25.zip",
          type: "zip",
        },
        {
          id: "qwe12312302",
          name: "PascalZim",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/08/pascalzim.zip",
          type: "zip",
        },
        {
          id: "qwe12312303",
          name: "Dev C++",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/08/Dev-Cpp.zip",
          type: "zip",
        },
      ],
    },
    {
      id: "qwe123456",
      name: "Plano de ensino",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c39",
      files: [
        {
          id: "qwe12345601",
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
          id: "qwe12345701",
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
          id: "qwe12345801",
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
          id: "qwe12345901",
          name: "Lista 01 - Estrutura Sequencial",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/EXERC%C3%8DCIOS-LISTA-1-ESTRUTURA-SEQUENCIAL-1-SEMESTRE-2017.docx",
          type: "word",
        },
        {
          id: "qwe12345902",
          name: "Lista 02 - Estrutura Condicional",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/10/EXERC%C3%8DCIOS-LISTA-3-ESTRUTURA-REPETI%C3%87%C3%83O-2-SEMESTRE-2014-eletronica.doc",
          type: "word",
        },
        {
          id: "qwe12345903",
          name: "Lista 03 - Estrutura de Repetição",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/10/EXERC%C3%8DCIOS-LISTA-3-ESTRUTURA-REPETI%C3%87%C3%83O-2-SEMESTRE-2014-eletronica.doc",
          type: "word",
        },
        {
          id: "qwe12345904",
          name: "Lista 04 – Vetores",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/10/EXERC%C3%8DCIOS-LISTA-4-VETORES-SEMESTRE-2014-eletronica.doc",
          type: "word",
        },
      ],
    },
    {
      id: "qwe123460",
      name: "Exemplos",
      vertical: true,
      schoolSubjectId: "5fbfe6d74c7b0000cc007c39",
      files: [
        {
          id: "qwe12346001",
          name: "Aula 01 - Exemplo 01",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/Aula01.zip",
          type: "zip",
        },
        {
          id: "qwe12346002",
          name: "Aula 01 - Exemplo 03",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/Aula01Ex03.zip",
          type: "zip",
        },
        {
          id: "qwe12346003",
          name: "Calculadora 01",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/Calculadora.zip",
          type: "zip",
        },
        {
          id: "qwe12346004",
          name: "Calculadora 02",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/Calculadora2.zip",
          type: "zip",
        },
        {
          id: "qwe12346005",
          name: "Calculadora 03",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/Calculadora3.zip",
          type: "zip",
        },
        {
          id: "qwe12346006",
          name: "Estrutura Condicional - switch..case",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/ExemploSwitchCase.zip",
          type: "zip",
        },
        {
          id: "qwe12346007",
          name: "Repetição indeterminada - while(..){..}",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/RepeticaoIndeterminada.zip",
          type: "zip",
        },
        {
          id: "qwe12346008",
          name: "Repetição indeterminada - do {..} while(..)",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/10/ExemploDoWhile.zip",
          type: "zip",
        },
        {
          id: "qwe12346009",
          name: "Repetição determinada - for",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/10/ExemploFor.zip",
          type: "zip",
        },
        {
          id: "qwe12346010",
          name: "Vetores",
          url:
            "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/02/ExemploVetor1.zip",
          type: "zip",
        },
      ],
    },
    {
      id: "5fbfe6d74c7b0000cc007c4001",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {
          id: "5fbfe6d74c7b0000cc007c400101",
          name: "Apostila Completa",
          type: "pdf",
          url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2015/08/ETEC_Completo-LTP_I_Java.pdf"
        }
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4002",
      name: "Unidade 1 – Introdução À Linguagem De Programação",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {
          id: "5fbfe6d74c7b0000cc007c400201",
          name: "Apostila",
          type: "pdf",
          url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2013/10/ETEC_Unidade_I_-LTP_I_Java.pdf"
        },
        {
          id: "5fbfe6d74c7b0000cc007c400202",
          name: "Lista de Exercícios I",
          type: "pdf",
          url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2013/10/Lista-de-Exerc%c3%adcios-1-Unidade-I.pdf"
        }
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4003",
      name: "Videoaulas",
      vertical: true,
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {"id": "5fbfe6d74c7b0000cc007c400301", "type": "video", "name":"Apresentação","url":"https://goo.gl/QjeuUs"},
        {"id": "5fbfe6d74c7b0000cc007c400302", "type": "video", "name":"NetBeans","url":"https://goo.gl/xUeaot"},
        {"id": "5fbfe6d74c7b0000cc007c400303", "type": "video", "name":"Fundamentos","url":"https://goo.gl/aWXlv7"},
        {"id": "5fbfe6d74c7b0000cc007c400304", "type": "video", "name":"Algoritmos","url":"https://goo.gl/7nIzWA"}
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4004",
      name: "Unidade 2 – Estruturas Condicionais e de Repetição",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {
          id: "5fbfe6d74c7b0000cc007c400401",
          name: "Apostila",
          type: "pdf",
          url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2013/10/ETEC_Unidade_II_-LTP_I_Java.pdf"
        },
        {
          id: "5fbfe6d74c7b0000cc007c400402",
          name: "Lista de Exercícios II",
          type: "pdf",
          url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2013/10/Lista-de-Exerc%c3%adcios-2-Unidade-II.pdf"
        }
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4005",
      name: "Videoaulas",
      vertical: true,
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {"id": "5fbfe6d74c7b0000cc007c400501", "type": "video", "name":"Apresentação", "url":"https://goo.gl/vO70jV"},
        {"id": "5fbfe6d74c7b0000cc007c400502", "type": "video", "name":"Estrutura Condicional","url":"https://goo.gl/iDAU3I"},
        {"id": "5fbfe6d74c7b0000cc007c400503", "type": "video", "name":"Estrutura de Repetição","url":"https://goo.gl/95mmCd"},
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4006",
      name: "Unidade 3 – Programação Orientada A Objetos",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {
          id: "5fbfe6d74c7b0000cc007c400601",
          name: "Apostila",
          type: "pdf",
          url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2013/10/ETEC_Unidade_III_-LTP_I_Java.pdf"
        },
        {
          id: "5fbfe6d74c7b0000cc007c400602",
          name: "Lista de Exercícios III",
          type: "pdf",
          url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2013/10/Lista-de-Exerc%c3%adcios-3-Unidade-III.pdf"
        }
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4007",
      name: "Videoaulas",
      vertical: true,
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {"id": "5fbfe6d74c7b0000cc007c400701", "type": "video", "name":"Apresentação","url":"https://goo.gl/DC5nBW"},
        {"id": "5fbfe6d74c7b0000cc007c400702", "type": "video", "name":"Classes e Objetos","url":"https://goo.gl/jd7tmL"},
        {"id": "5fbfe6d74c7b0000cc007c400703", "type": "video", "name":"Código: Classes e Objetos","url":"https://goo.gl/Z9sk4O"},
        {"id": "5fbfe6d74c7b0000cc007c400704", "type": "video", "name":"Métodos","url":"https://goo.gl/pR3aa5"},
        {"id": "5fbfe6d74c7b0000cc007c400705", "type": "video", "name":"Construtores","url":"https://goo.gl/rF7lHc"},
        {"id": "5fbfe6d74c7b0000cc007c400706", "type": "video", "name":"Encapsulamento","url":"https://goo.gl/3vYfz0"},
        {"id": "5fbfe6d74c7b0000cc007c400707", "type": "video", "name":"Resumo dos conceitos","url":"https://goo.gl/rdGwyM"},
        {"id": "5fbfe6d74c7b0000cc007c400708", "type": "video", "name":"Exemplos finais","url":"https://goo.gl/J5YGNA"}
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4008",
      name: "Unidade 4 – Reuso De Classes – Herança",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {
          id: "5fbfe6d74c7b0000cc007c400801",
          name: "Apostila",
          type: "pdf",
          url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2013/10/ETEC_Unidade_IV_-LTP_I_Java-65-a-76.pdf"
        },
        {
          id: "5fbfe6d74c7b0000cc007c400802",
          name: "Lista de Exercícios IV",
          type: "pdf",
          url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2013/10/Lista-de-Exerc%c3%adcios-4-Unidade-IV.pdf"
        }
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4009",
      name: "Videoaulas",
      vertical: true,
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {"id": "5fbfe6d74c7b0000cc007c400901", "type": "video", "name":"Herança", "url":"https://goo.gl/koHxjB"},
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4010",
      name: "Unidade 5 – Aplicação de Conceitos Da Orientação A Objetos",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {
          id: "5fbfe6d74c7b0000cc007c401001",
          name: "Apostila",
          type: "pdf",
          url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2013/10/ETEC_Unidade_V_LTP_I_Java-pag-77-a-83.pdf"
        }
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4011",
      name: "Videoaulas",
      vertical: true,
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {"id": "5fbfe6d74c7b0000cc007c401101", "type":"video", "name":"Aplicação de conceitos de OO","url":"https://goo.gl/br5eva"},
        {"id": "5fbfe6d74c7b0000cc007c401102", "type":"video", "name":"Sobrecarga de métodos – parte 1","url":"https://goo.gl/S4Xpv9"},
        {"id": "5fbfe6d74c7b0000cc007c401103", "type":"video", "name":"Sobrecarga de métodos – parte 2","url":"https://goo.gl/AZLiSs"},
        {"id": "5fbfe6d74c7b0000cc007c401104", "type":"video", "name":"Sobrecarga de métodos – parte 3","url":"https://goo.gl/oBKcA8"},
        {"id": "5fbfe6d74c7b0000cc007c401105", "type":"video", "name":"Sobrecarga de métodos – parte 4","url":"https://goo.gl/t5guBi"}
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4012",
      name: "Unidade 6 – Utilização de Diversas Classes e Vetor em Java",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {
          id: "5fbfe6d74c7b0000cc007c401201",
          name: "Apostila",
          type: "pdf",
          url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2013/10/ETEC_Unidade_VI_LTP_I_Java-pag-84-a-98.pdf"
        },
        {
          id: "5fbfe6d74c7b0000cc007c401202",
          name: "Lista de Exercícios V e VI",
          type: "pdf",
          url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2013/10/Lista-de-Exerc%c3%adcios-5-Unidade-V-e-VI.pdf"
        }
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4013",
      name: "Videoaulas",
      vertical: true,
      schoolSubjectId: "5fbfe6d74c7b0000cc007c40",
      files: [
        {"id": "5fbfe6d74c7b0000cc007c401301", "type": "video", "name":"Classes e Vetor","url":"https://goo.gl/npImnN"}
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4101",
      name: "Apostila",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c41",
      files: [
        {id: "5fbfe6d74c7b0000cc007c410101", name: "Apostila de JAVA Caelum", url: "https://www.caelum.com.br/apostila-java-web/", type: "pdf"}
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4102",
      name: "Diagramas de Classe - Exercícios",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c41",
      vertical: true,
      files: [
        {id: "5fbfe6d74c7b0000cc007c410201", name: "Herança", url: "https://drive.google.com/open?id=10ljb3lmZeZwS2Oshf-BjiYfxemXW6Col", type: "zip"},
        {id: "5fbfe6d74c7b0000cc007c410202", name: "Agregação", url: "https://drive.google.com/open?id=1P0FTthf5o0yB4Ef60MdLsCvjYeh52QnD", type: "zip"},
        {id: "5fbfe6d74c7b0000cc007c410203", name: "Classe Abstrata", url: "https://drive.google.com/open?id=1BSD7Q4SFKL-vZzPfu5U1Ln96-V0dz-0Q", type: "zip"},
        {id: "5fbfe6d74c7b0000cc007c410204", name: "Interface", url: "https://drive.google.com/file/d/1PB2RWixDphNsESawZw8s6RkLJ7-TNABu/view", type: "zip"},
        {id: "5fbfe6d74c7b0000cc007c410205", name: "Banco de dados", url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/05-Banco-de-Dados.zip", type: "zip"},
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4103",
      name: "Videoaulas",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c41",
      vertical: true,
      files: [
        {id: "5fbfe6d74c7b0000cc007c410301", name: "LIVE #1 Encapsulamento, Herança e Polimorfismo", url: "pO1EZ3WWEEc", youtube: true},
        {id: "5fbfe6d74c7b0000cc007c410302", name: "LIVE #2 Implementando Exercício Prático de Herança", url: "tQSB2fj_ZCE", youtube: true},
        {id: "5fbfe6d74c7b0000cc007c410303", name: "LIVE #3 Agregação, Associação e Composição + Exercício Prático", url: "n-rGBH3Iixc", youtube: true},
        {id: "5fbfe6d74c7b0000cc007c410304", name: "LIVE #4 Classe Abstrata e Interface + Exercício Prático", url: "qd_1u-pzN1I", youtube: true},
        {id: "5fbfe6d74c7b0000cc007c410305", name: "LIVE #5 Organização do projeto e Menu de opções e submenus com JOptionPane", url: "u51T8vzS_bU", youtube: true},
        {id: "5fbfe6d74c7b0000cc007c410306", name: "LIVE #6 Refatorando o projeto com Menu de opções", url: "3EX9mAjHGYA", youtube: true},
        {id: "5fbfe6d74c7b0000cc007c410307", name: "LIVE #7 Projeto Menu de opções. Criando a classe Entrada.java", url: "t2ZwMWlHlE4", youtube: true},
        {id: "5fbfe6d74c7b0000cc007c410308", name: "LIVE #8 Introdução à banco de dados", url: "dwR4gqdeHLs", youtube: true},
      ]
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
