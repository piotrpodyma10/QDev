const Questions = () => [
    { 
      question: 'Którym tagiem powinniśmy się posłużyć, aby stworzyć element wewnątrz listy typu <ol>?',
      imgId: 'html.png',
      answers: [
        '<ul>',
        '<item>',
        '<element>',
        'Żadna z wymienionych'
      ]
    },
    { 
      question: 'W jaki sposób podajemy przeglądarce informację, o używaniu przez nas polskich znaków na stronie?',
      imgId: 'html.png',
      answers: [
        '<meta charset="utf-8"',
        '<meta lang="pl">',
        '<meta lang="utf-8">',
        '<meta charset="pl"'
      ]
    },
    { 
      question: 'Co się stanie po kliknięciu poniższego linku?',
      imgId: 'link.png',
      answers: [
        'Przeniesie nas na stronę 02.pl i otworzy ją w nowej karcie przeglądarki',
        'Przeniesie nas na stronę 02.pl i otworzy ją w tej samej karcie przeglądarki',
        'Przeniesie nas na stronę wp.pl i otworzy ją w tej samej karcie przeglądarki',
        'Przeniesie nas na stronę wp.pl i otworzy ją w nowej karcie przeglądarki',
      ]
    },
    { 
      question: 'Jaka jest rola HTML na stronie internetowej?',
      imgId: 'html.png',
      answers: [
        'Opisanie struktury strony',
        'Dodanie do strony elementów interaktywnych',
        'Określenie wyglądu elementów na stronie',
        'Żadna z wymienionych'
      ]
    },
    { 
      question: 'Którego tagu HTML używany do zdefiniowania styli CSS wewnątrz dokumentu HTML?',
      imgId: 'html.png',
      answers: [
        '<style>',
        '<css>',
        '<stylesheet>',
        'Żadna z wymienionych'
      ]
    },
    { 
      question: 'Z której właściwości CSS możemy skorzystać, aby wyśrodkować element w poziomie względem swojego rodzica?',
      imgId: 'css.png',
      answers: [
        'text-align: center',
        'text-position: center',
        'display: flex',
        'Żadna z wymienionych'
      ]
    },
    { 
      question: 'Której właściwości CSS powinniśmy użyć, aby ustawić kolor fontu?',
      imgId: 'css.png',
      answers: [
        'color',
        'fill',
        'font-color',
        'text-color'
      ]
    },
    { 
      question: 'Który tag umożliwia dodanie autosugestii do pola typu input?',
      imgId: 'html.png',
      answers: [
        '<datalist>',
        '<select>',
        '<li>',
        'Żadna z wymienionych'
      ]
    },
    { 
      question: 'Którego atrybutu używamy do zdefiniowania styli CSS dla konkretnego tagu (inline)?',
      imgId: 'css.png',
      answers: [
        'style',
        'class',
        'css',
        'styles'
      ]
    },
    { 
      question: 'W której części dokumentu HTML najlepiej jest podpiąć arkusz styli CSS?',
      imgId: 'html.png',
      answers: [
        'Między tagami <head>',
        'Między tagami <html>',
        'Między tagami <body>',
        'Na końcu dokumentu'
      ]
    },
    { 
      question: 'Który z poniższych atrybutów nie może zostać użyty w ramach tagu <a>?',
      imgId: 'html.png',
      answers: [
        'id',
        'href',
        'target',
        'Każdy z nich może zostać użyty'
      ]
    },
    { 
      question: 'HTML w przełożeniu na język polski możemy tłumaczyć jako:',
      imgId: 'html.png',
      answers: [
        'Hipertekstowy język znaczników',
        'Strukturalny język znaczników',
        'Hipertekstowy język strukturalny',
        'Opisowy język webowy'
      ]
    },
    { 
      question: 'Jaki jest poprawny sposób podpięcia do dokumentu HTML zewnętrznego arkusza ze stylami?',
      imgId: 'css.png',
      answers: [
        '<link rel="stylesheet" type="text/css" href="mystyle.css"',
        '<style src="mystyle.css">',
        '<style rel="stylesheet" type="text/css" href="mystyle.css"',
        'Żadne z wymienionych'
      ]
    },
    { 
      question: 'Jaka będzie szerokość lewego marginesu w przypadku paragrafu, dla którego style przedstawiono poniże?',
      imgId: 'paragraf.png',
      answers: [
        '15px',
        '10px',
        '5px',
        '20px'
      ]
    },
    { 
      question: 'Ile wynosi specyficzność selektora ".app"?',
      imgId: 'css.png',
      answers: [
        '010',
        '001',
        '100',
        'Żadna z wymienionych'
      ]
    },
    { 
      question: 'Ile wynosi specyficzność dla właściwości CSS, do których dopisaliśmy !important?',
      imgId: 'css.png',
      answers: [
        '1000',
        '10000',
        '9999',
        '!important nie wpływa na specyficzność'
      ]
    },
    { 
      question: 'Ile wynosi specyficzność selektora "p.app"?',
      imgId: 'css.png',
      answers: [
        'Żadna z wymienionych',
        '001',
        '010',
        '100'
      ]
    },
    { 
      question: 'Która z poniższych właściwości nie stanowi części modelu pudełkowego?',
      imgId: 'css.png',
      answers: [
        'margin',
        'padding',
        'outline',
        'border'
      ]
    },
    { 
      question: 'Jakiego selektora powinniśmy użyć, aby ostylować element o id równym "text"?',
      imgId: 'css.png',
      answers: [
        '#text',
        '$text',
        'text',
        '.text'
      ]
    },
    { 
      question: 'Jaka będzie szerokość elementu .box, którego style zostały zapisane poniżej?',
      imgId: 'box.png',
      answers: [
        '240px',
        '220px',
        '200px',
        '260px'
      ]
    },
    { 
      question: 'Ile wynosi specyficzność selektora "*"?',
      imgId: 'css.png',
      answers: [
        '010',
        '001',
        '100',
        '110'
      ]
    },
    { 
      question: 'Aby wykorzystać zmienną css o nazwie "color" do określenia koloru tła powinniśmy zapisać:',
      imgId: 'css.png',
      answers: [
        'background-color: var(--color)',
        'background-color: $color',
        'background-color: --color',
        'background-color: var(color)'
      ]
    },
    { 
      question: 'Który z poniższych jest zapisany zgodnie ze składnią stylów CSS?',
      imgId: 'css.png',
      answers: [
        'body {color: black;}',
        'body: color=black;',
        '{body {color: black;}}',
        '{body; color: black}'
      ]
    },
    { 
      question: 'Która z poniższych odpowiedzi zawiera prawidłowy zapis koloru szesnastkowego w CSS?',
      imgId: 'css.png',
      answers: [
        '#fafafa',
        'hex(#fafafa);',
        'hex(200, 200, 200);',
        'rgb(150, 150, 200)'
      ]
    },
    { 
      question: 'W języku JavaScript znak "=" stanowi operator:',
      imgId: 'js.png',
      answers: [
        'przypisania',
        'równości',
        'przyrównania',
        'konkatenacji'
      ]
    },
    { 
      question: 'Co zostanie zalogowane w konsoli po wykonaniu poniższego kodu?',
      imgId: 'ans1.png',
      answers: [
        '2',
        'undefined',
        '1',
        'Błąd'
      ]
    },
    { 
      question: 'Kod JavaScript zapisujemy w plikach z rozszerzeniem:',
      imgId: 'js.png',
      answers: [
        '.js',
        '.script',
        '.javascript',
        'Żadna z wymienionych'
      ]
    },
    { 
      question: 'Co zostanie zalogowane w konsoli po wykonaniu poniższego kodu?',
      imgId: 'ans2.png',
      answers: [
        '6',
        '"6"',
        '"Janusz"',
        'Błąd'
      ]
    },
    { 
      question: 'Aby dodać do kodu JavaScript komentarz wieloliniowy (multi-line comment) powinniśmy zapisać:',
      imgId: 'js.png',
      answers: [
        '/* Treść komentarza */',
        '/* Treść komentarza /*',
        '# Treść komentarza #',
        '// Treść komentarza' 
      ]
    },
    { 
      question: 'Celem tworzenia zmiennych jest:',
      imgId: 'js.png',
      answers: [
        'Zapisanie w pamięci komputera danych, z których będziemy mogli później skorzystać',
        'Określenie, jaki będzie rozmiar zajmowany przez naszą aplikację',
        'Żadna z wymienionych',
        'Poinformowanie komputera, jakie dane zbiera nasz program'
      ]
    },
    { 
      question: 'Z której z poniższych funkcjonalności na stronie NIE powinniśmy tworzyć z wykorzystaniem języka JavaScript?',
      imgId: 'js.png',
      answers: [
        'Każdą z tych funkcjonalności powinniśmy tworzyć z wykorzystaniem JSa',
        'Stopera odliczającego podany czas',
        'Slidera a animowanymi przejściami slajdów',
        'Galerii, w której kliknięcie na zdjęcie powoduje jego powiększenie',
      ]
    },
    { 
      question: 'Aby dodać do dokumentu HTML kod JavaScript powinniśmy zawrzeć go pomiędzy tagami:',
      imgId: 'js.png',
      answers: [
        'script',
        'javascript',
        'code',
        'Żadna z odpowiedzi nie jest prawidłowa'
      ]
    },
  ]

export default Questions

