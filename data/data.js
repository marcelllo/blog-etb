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
        },
        {
          id: "5fbfe6d74c7b0000cc007c400103",
          name: "JDK 8 NetBeans 8.2",
          type: "exe",
          url: "http://docs.etb.com.br/s/XHLwmZQwJ6MMrZk"
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
        {"id": "5fbfe6d74c7b0000cc007c400301", "type": "video", "name":"Apresentação","url":"https://drive.google.com/file/d/1irwq4lDiIHvfQRCiJxfScrQ6RDiSeRUO/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c400302", "type": "video", "name":"NetBeans","url":"https://drive.google.com/file/d/1riHBFtTrNXzvBmIi7jfNJFKnTUQkdKhg/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c400303", "type": "video", "name":"Fundamentos","url":"https://drive.google.com/file/d/1t690Uab_RV3ErCez5kAHAo2INCddv7Nu/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c400304", "type": "video", "name":"Algoritmos","url":"https://drive.google.com/file/d/1i-OQeEsI2XIt5XyHyGN3LKhsiMCCNCKb/view?usp=sharing"}
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
        {"id": "5fbfe6d74c7b0000cc007c400501", "type": "video", "name":"Apresentação", "url":"https://drive.google.com/file/d/1BhqYKZrWU89a1MUF01auBt1q4rDldXR8/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c400502", "type": "video", "name":"Estrutura Condicional","url":"https://drive.google.com/file/d/1FeNkXwaaLHyitQJ6l0kBmT14KkwMxQ_l/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c400503", "type": "video", "name":"Estrutura de Repetição","url":"https://drive.google.com/file/d/1YiMJOlpVX0PcqG5D5TaBx3MEVvEeFb8f/view?usp=sharing"},
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
        {"id": "5fbfe6d74c7b0000cc007c400701", "type": "video", "name":"Apresentação","url":"https://drive.google.com/file/d/14YBumsC6LRKU048zst9bwhv_QqQdD5i6/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c400702", "type": "video", "name":"Classes e Objetos","url":"https://drive.google.com/file/d/1kIh4Pd7BO_C1OKx5pkWSwxHzvnkwfQYX/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c400703", "type": "video", "name":"Código: Classes e Objetos","url":"https://drive.google.com/file/d/1PSPLpUNy1zyzGwq8KzD1u15fGW5UsBrW/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c400704", "type": "video", "name":"Métodos","url":"https://drive.google.com/file/d/1p7-ygg7RPxpgEGLuTsrjbQxi3z5BE0d8/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c400705", "type": "video", "name":"Construtores","url":"https://drive.google.com/file/d/1oNVK7GmGz2JSgiYW1x67x4igYSweySnQ/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c400706", "type": "video", "name":"Encapsulamento","url":"https://drive.google.com/file/d/1PTYrH1xwP1X0hSaPLlDbxXmVFab8Xytm/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c400707", "type": "video", "name":"Resumo dos conceitos","url":"https://drive.google.com/file/d/1zRgdcHLshvAfNu1RqEZcgl66cNO9ZNsn/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c400708", "type": "video", "name":"Exemplos finais","url":"https://drive.google.com/file/d/1MoHxYK6I1sbeCwYDR3tQ5WI6OARp59JN/view?usp=sharing"}
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
        {"id": "5fbfe6d74c7b0000cc007c400901", "type": "video", "name":"Herança", "url":"https://drive.google.com/file/d/1VBFcArJinG5FkA6cW0rMP9gHsoqWKfP_/view?usp=sharing"},
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
        {"id": "5fbfe6d74c7b0000cc007c401101", "type":"video", "name":"Aplicação de conceitos de OO","url":"https://drive.google.com/file/d/1yKyaVeHTCdPaq3GNnmJHvy16mmWy4VMh/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c401102", "type":"video", "name":"Sobrecarga de métodos – parte 1","url":"https://drive.google.com/file/d/1DbectGvkLXGdrDSPy_wPsPxSrps3hnTR/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c401103", "type":"video", "name":"Sobrecarga de métodos – parte 2","url":"https://drive.google.com/file/d/1XUI932J9pNv7W_epfGKly9Z6sD7s4KZy/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c401104", "type":"video", "name":"Sobrecarga de métodos – parte 3","url":"https://drive.google.com/file/d/155pJCzhgQ4KDosExXPZXeLuMFB7ic3Xr/view?usp=sharing"},
        {"id": "5fbfe6d74c7b0000cc007c401105", "type":"video", "name":"Sobrecarga de métodos – parte 4","url":"https://drive.google.com/file/d/1Y3zjmnadVu3QtHyX2o-e71JQHGPLne8V/view?usp=sharing"}
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
        {"id": "5fbfe6d74c7b0000cc007c401301", "type": "video", "name":"Classes e Vetor","url":"https://drive.google.com/file/d/1eEQSix2__TjeobmBl_8uZxrRKe87-KP6/view?usp=sharing"}
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
      name: "Orientação à Objetos - Videoaulas",
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
        {id: "5fbfe6d74c7b0000cc007c410308", name: "(Editando… aguarde!) LIVE #9 Banco de dados: Padrão DAO com exemplo de CRUD", youtube: true},
        {id: "5fbfe6d74c7b0000cc007c410308", name: "(Editando… aguarde!) LIVE #9 Criando o projeto CRUD de Pessoa", youtube: true},
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4104",
      name: "Banco de dados - Videoaulas",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c41",
      vertical: true,
      files: [
        {"id": "5fbfe6d74c7b0000cc007c410401", youtube: true, "name":"Criando o banco de dados","url":"JzHcHljDn_Q"},
        {"id": "5fbfe6d74c7b0000cc007c410402", youtube: true, "name":"Criando Projeto e adicionando Driver JDBC do MySQL","url":"KghqsCDAxNI"},
        {"id": "5fbfe6d74c7b0000cc007c410403", youtube: true, "name":"Criando as entidades","url":"x46WaWrVfjk"},
        {"id": "5fbfe6d74c7b0000cc007c410404", youtube: true, "name":"Criando interface de configuração do banco de dados","url":"efrW3lHb_X4"},
        {"id": "5fbfe6d74c7b0000cc007c410405", youtube: true, "name":"Gerente de Conexão","url":"sPxENFkBCz0"},
        {"id": "5fbfe6d74c7b0000cc007c410406", youtube: true, "name":"ContatoDAO – Método listar","url":"aCbd8UMqZjw"},
        {"id": "5fbfe6d74c7b0000cc007c410407", youtube: true, "name":"ContatoDAO – Método inserir","url":"cCE0hp61Hlo"},
        {"id": "5fbfe6d74c7b0000cc007c410408", youtube: true, "name":"ContatoDAO – Método alterar","url":"zaF9fonTRF0"},
        {"id": "5fbfe6d74c7b0000cc007c410409", youtube: true, "name":"ContatoDAO – Método excluir","url":"m3u2xvLhdEk"},
        {"id": "5fbfe6d74c7b0000cc007c410410", youtube: true, "name":"Passo-a-passo – TesteListar.java","url":"QFsimSf5cvw"},
        {"id": "5fbfe6d74c7b0000cc007c410411", youtube: true, "name":"TesteListar.java","url":"pH2sFzZV340"},
        {"id": "5fbfe6d74c7b0000cc007c410412", youtube: true, "name":"TesteInserir.java","url":"JM2TPnvt-Hg"},
        {"id": "5fbfe6d74c7b0000cc007c410413", youtube: true, "name":"TesteAlterar.java","url":"GZI2904Ddok"},
        {"id": "5fbfe6d74c7b0000cc007c410414", youtube: true, "name":"TesteExcluir.java","url":"CwuieoTd398"},
        {"id": "5fbfe6d74c7b0000cc007c410415", youtube: true, "name":"CRUD Contatos com JFrame – Parte 1 – Botão Listar","url":"JaLF_vU6lO4"},
        {"id": "5fbfe6d74c7b0000cc007c410416", youtube: true, "name":"CRUD Contatos com JFrame – Parte 2 – Botão Excluir","url":"zQ7TAc37iAw"},
        {"id": "5fbfe6d74c7b0000cc007c410417", youtube: true, "name":"CRUD Contatos com JFrame – Parte 3 – Botão Salvar","url":"riFoTUh9fp4"},
        {"id": "5fbfe6d74c7b0000cc007c410418", youtube: true, "name":"CRUD Contatos com JFrame – Parte 4 – Tela de pesquisa e listagem","url":"XKj_00U2hHM"},
        {"id": "5fbfe6d74c7b0000cc007c410419", youtube: true, "name":"CRUD Contatos com JFrame – Tela Pesquisar – Botão Excluir","url":"Di5qR3D_gOM"},
        {"id": "5fbfe6d74c7b0000cc007c410412", youtube: true, "name":"CRUD Contatos com JFrame – Tela Pesquisar – Ajuste na lógica de exclusão","url":"WGVQTRhEHnY"},
        {"id": "5fbfe6d74c7b0000cc007c410421", youtube: true, "name":"CRUD Contatos com JFrame – Tela Pesquisar – Botão Novo","url":"pNU56QsahxY"},
        {"id": "5fbfe6d74c7b0000cc007c410422", youtube: true, "name":"CRUD Contatos com JFrame – Tela Pesquisar – Botão Alterar","url":"a8i-c5rG6eU"},
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4105",
      name: "Interface Gráfica - Videoaulas",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c41",
      vertical: true,
      files: [
        {"id": "5fbfe6d74c7b0000cc007c410501", youtube: true, "name":"JButton, JLabel, JTextField e JOptionPane","url":"X4dPOHDm3Hk"},
        {"id": "5fbfe6d74c7b0000cc007c410502", youtube: true, "name":"Obtendo valores do JTextField para formatos String, double e int","url":"hzSFCAye4qM"},
        {"id": "5fbfe6d74c7b0000cc007c410503", youtube: true, "name":"Calculando INSS do salário líquido do funcionário","url":"rA0hv2jcoQs"},
        {"id": "5fbfe6d74c7b0000cc007c410504", youtube: true, "name":"Abrindo um formulário a partir de um botão","url":"SiO0NjBBm7w"},
        {"id": "5fbfe6d74c7b0000cc007c410505", youtube: true, "name":"(Editando… aguarde!) Criando tabela de dados com JTable"},
        {"id": "5fbfe6d74c7b0000cc007c410506", youtube: true, "name":"(Editando… aguarde!) Algumas configurações do JTable e habilitando/desabilitando JButton"},
        {"id": "5fbfe6d74c7b0000cc007c410507", youtube: true, "name":"(Editando… aguarde!) Excluindo dados da tabela"},
        {"id": "5fbfe6d74c7b0000cc007c410508", youtube: true, "name":"(Editando… aguarde!) Alterando dados da tabela"},
        {"id": "5fbfe6d74c7b0000cc007c410509", youtube: true, "name":"(Editando… aguarde!) Adicionando máscara de data, telefone e CPF"},
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4106",
      name: "Arquivos",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c41",
      files: [
        {id: "5fbfe6d74c7b0000cc007c410601", "name": "Script SQL", "type": "zip", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2018/05/java2.zip"},
        {id: "5fbfe6d74c7b0000cc007c410602", "name": "Exercício - Banco de dados", "type": "zip", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/05-Exercicio-Banco-De-Dados.pdf"},
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4107",
      name: "Arquivos",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c41",
      files: [
        {id: "5fbfe6d74c7b0000cc007c410701", "name": "MER", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2018/06/MERLocadora.png"},
        {id: "5fbfe6d74c7b0000cc007c410701", "name": "Script SQL", "type": "zip", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2018/06/locadora-sql.zip"},
        {id: "5fbfe6d74c7b0000cc007c410701", "name": "Diagrama de classe", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2018/06/DiagramaDeClasse.png"},
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4108",
      name: "Exercícios",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c42",
      files: [
        {id: "5fbfe6d74c7b0000cc007c410801", "type": "pdf", "name": "Exercício 1 – JSP e Servlets", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/08/EXERC%C3%8DCIOS-JSP-e-Servlet.pdf"},
        {id: "5fbfe6d74c7b0000cc007c410801", "type": "pdf", "name": "Exercício 2 – CRUD Empregado", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/09/Atividade-II-Instru%C3%A7%C3%B5es.pdf"},
        {id: "5fbfe6d74c7b0000cc007c410801", "type": "zip", "name": "CRUD Empregado", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/09/CRUD-Empregado.zip"},
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4109",
      name: "Exemplos práticos",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c42",
      vertical: true,
      files: [
        {id: "5fbfe6d74c7b0000cc007c410901", "type": "zip", "name": "SQL do banco de dados do projeto Agenda", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/AgendaSQL.zip"},
        {id: "5fbfe6d74c7b0000cc007c410901", "type": "zip", "name": "Projeto – Aula 01", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/08/Projeto-Aula01.zip"},
        {id: "5fbfe6d74c7b0000cc007c410901", "type": "zip", "name": "Projeto – Aula 02", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/08/Projeto-Aula02.zip"},
        {id: "5fbfe6d74c7b0000cc007c410901", "type": "zip", "name": "Projeto Agenda – Parte 1", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/08/Agenda-Parte1.zip"},
        {id: "5fbfe6d74c7b0000cc007c410901", "type": "zip", "name": "Projeto Agenda – Parte 2", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/Agenda-Parte2.zip"},
        {id: "5fbfe6d74c7b0000cc007c410901", "type": "zip", "name": "Projeto Agenda – Parte 3 - Cadastrando em tabela associativa", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/Agenda-Parte3.zip"},
        {id: "5fbfe6d74c7b0000cc007c410901", "type": "zip", "name": "Projeto Agenda – Parte 4 - Mostrando um menu dinâmico", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/Agenda-Parte4.zip"},
        {id: "5fbfe6d74c7b0000cc007c410901", "type": "zip", "name": "Projeto Agenda – Parte 5 - Cadastramento de Perfil e acesso aos menus", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/Agenda-Parte5.zip"},
        {id: "5fbfe6d74c7b0000cc007c410901", "type": "zip", "name": "Projeto Agenda – Parte 6 – Ajustando cadastramento cadastro de menu ao perfil", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/Agenda-Parte6.zip"},
        {id: "5fbfe6d74c7b0000cc007c410901", "type": "zip", "name": "Projeto Agenda – Parte 7 - Validação de acesso às páginas via URL.", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/Agenda-Parte7.zip"},
        {id: "5fbfe6d74c7b0000cc007c410901", "type": "zip", "name": "Exemplo de Upload (Envio de arquivos)", "url": "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/11/ExemploUpload.zip"},
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4110",
      name: "Diversos",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c42",
      files: [
        {"id": "5fbfe6d74c7b0000cc007c411001", "type": "zip", "name": "Template AdminLTE", url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2017/08/AdminLTE-2.3.11.zip"}
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4111",
      name: "Apostilas e Slides",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c42",
      vertical: true,
      files: [
        {"id": "5fbfe6d74c7b0000cc007c411101", "type": "ppt", "name": "Aula 01 - Aplicação Web", url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/Aula-01.pptx"},
        {"id": "5fbfe6d74c7b0000cc007c411101", "type": "ppt", "name": "Aula 02 - Servlets", url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/Aula-02.pptx"},
        {"id": "5fbfe6d74c7b0000cc007c411101", "type": "pdf", "name": "Aula 02 – Passo-a-Passo criação de Servlets.", url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/Aula02-Passo-a-Passo-Servlet.pdf"},
        {"id": "5fbfe6d74c7b0000cc007c411101", "type": "ppt", "name": "Aula 03 – Java Server Pages (JSP)", url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/Aula-03.pptx"},
        {"id": "5fbfe6d74c7b0000cc007c411101", "type": "ppt", "name": "Aula 04 – TagLibs", url: "https://marcelo.portalceilandia.com.br/site/wp-content/uploads/2016/06/Aula-04.pptx"},
      ]
    },
    {
      id: "5fbfe6d74c7b0000cc007c4112",
      name: "Videoaulas",
      schoolSubjectId: "5fbfe6d74c7b0000cc007c42",
      vertical: true,
      files: [
        {"id": "5fbfe6d74c7b0000cc007c411201", "youtube": true, "name":"Configuração do Ambiente de Desenvolvimento","url":"lh5huA_g1o4"},
        {"id": "5fbfe6d74c7b0000cc007c411202", "youtube": true, "name":"Introdução ao JSP ","url":"x10p1muqpg4"},
        {"id": "5fbfe6d74c7b0000cc007c411203", "youtube": true, "name":"Introdução ao Servlet","url":"eP15KujUUoA"},
        {"id": "5fbfe6d74c7b0000cc007c411204", "youtube": true, "name":"Arquivo web.xml e conversão de tipos","url":"M7SELteYVfo"},
        {"id": "5fbfe6d74c7b0000cc007c411205", "youtube": true, "name":"Banco de dados com JAVA","url":"PpK98xQqA10"},
        {"id": "5fbfe6d74c7b0000cc007c411206", "youtube": true, "name":"JSP e Classes DAO","url":"UgP9lsiDWI8"},
        {"id": "5fbfe6d74c7b0000cc007c411207", "youtube": true, "name":"MVC e Exemplo de Inclusão de dados","url":"McOgivYznsA"},
        {"id": "5fbfe6d74c7b0000cc007c411208", "youtube": true, "name":"MVC e Exemplo de Alteração e exclusão de dados","url":"efWt0cVmSuc"},
        {"id": "5fbfe6d74c7b0000cc007c411209", "youtube": true, "name":"Autenticação de usuários","url":"AdoCPpfkI5Y"},
        {"id": "5fbfe6d74c7b0000cc007c411210", "youtube": true, "name":"Gravação de Datas – Classe SimpleDateFormat","url":"xNvKtvASNFI"},
        {"id": "5fbfe6d74c7b0000cc007c411211", "youtube": true, "name":"Gravação dados em tabelas associativas","url":"gyEOOFGo2zY"},
        {"id": "5fbfe6d74c7b0000cc007c411212", "youtube": true, "name":"Consultas SQL utilizando o comando INNER JOIN","url":"2-LAaqJPeO4"},
        {"id": "5fbfe6d74c7b0000cc007c411213", "youtube": true, "name":"Utilizando taglibs para formatação de dados","url":"sq3S_B_Wutw"},
        {"id": "5fbfe6d74c7b0000cc007c411214", "youtube": true, "name":"Páginas de pesquisa com JSP","url":"lrV8YmIMbbU"},
        {"id": "5fbfe6d74c7b0000cc007c411215", "youtube": true, "name":"Páginas de pesquisa com Servlets","url":"8VztTaONEQ8"}
      ]
    }
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
