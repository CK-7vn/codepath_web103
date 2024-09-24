const languages =
    [
        {
            "id": 1,
            "name": "Fortran",
            "created_in": "1957",
            "paradigm": "Imperative, Procedural",
            "creator": "John Backus",
            "description": "High-level language designed for scientific and engineering applications.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fortran/fortran-original.svg"
        },
        {
            "id": 2,
            "name": "Python",
            "created_in": "1991",
            "paradigm": "Object-Oriented, Imperative, Functional",
            "creator": "Guido van Rossum",
            "description": "An easy-to-learn, powerful high-level programming language known for its readability and versatility.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        },
        {
            "id": 3,
            "name": "C",
            "created_in": "1972",
            "paradigm": "Procedural, Imperative",
            "creator": "Dennis Ritchie",
            "description": "A widely-used systems language, influencing numerous modern languages.",
            "logo_image": " https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
        },
        {
            "id": 4,
            "name": "C++",
            "created_in": "1985",
            "paradigm": "Procedural, Object-Oriented",
            "creator": "Bjarne Stroustrup",
            "description": "Extension of C with added object-oriented features.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        },
        {
            "id": 5,
            "name": "C#",
            "created_in": "2000",
            "paradigm": "Object-Oriented, Imperative, Functional",
            "creator": "Microsoft",
            "description": "Designed for developing applications on Microsoft's .NET framework.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
        },
        {
            "id": 6,
            "name": "Java",
            "created_in": "1995",
            "paradigm": "Object-Oriented",
            "creator": "James Gosling",
            "description": "Platform-independent language designed for web and enterprise applications.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain-wordmark.svg"
        },
        {
            "id": 7,
            "name": "Haskell",
            "created_in": "1990",
            "paradigm": "Functional",
            "creator": "Simon Peyton Jones et al.",
            "description": "Pure functional programming language used primarily for academic and research purposes.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg"
        },
        {
            "id": 8,
            "name": "Go",
            "created_in": "2009",
            "paradigm": "Procedural, Concurrent",
            "creator": "Robert Griesemer, Rob Pike, Ken Thompson",
            "description": "Designed by Google for efficiency and ease of use in system programming and large-scale software.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
        },
        {
            "id": 9,
            "name": "Rust",
            "created_in": "2010",
            "paradigm": "Procedural, Memory-Safe",
            "creator": "Graydon Hoare",
            "description": "A systems programming language focusing on performance, memory safety, and parallelism.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
        },
        {
            "id": 10,
            "name": "Swift",
            "created_in": "2014",
            "paradigm": "Object-Oriented, Functional",
            "creator": "Apple Inc.",
            "description": "Modern programming language used for iOS and macOS app development.",
            "logo_image": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"
        },
        {
            "id": 11,
            "name": "Ruby",
            "created_in": "1995",
            "paradigm": "Object-Oriented, Imperative, Functional",
            "creator": "Yukihiro Matsumoto",
            "description": "Designed for simplicity and productivity, Ruby is widely known for powering the Ruby on Rails web framework.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
        },
        {
            "id": 12,
            "name": "Perl",
            "created_in": "1987",
            "paradigm": "Imperative, Procedural, Functional",
            "creator": "Larry Wall",
            "description": "Originally designed for text processing, Perl is known for its flexibility and powerful regular expressions.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/perl/perl-original.svg"
        },
        {
            "id": 13,
            "name": "PHP",
            "created_in": "1995",
            "paradigm": "Procedural, Object-Oriented",
            "creator": "Rasmus Lerdorf",
            "description": "Server-side scripting language primarily used for web development.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
        },
        {
            "id": 14,
            "name": "R",
            "created_in": "1993",
            "paradigm": "Functional, Object-Oriented",
            "creator": "Ross Ihaka, Robert Gentleman",
            "description": "Used primarily for statistical computing and graphics.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg"
        },
        {
            "id": 15,
            "name": "Scala",
            "created_in": "2003",
            "paradigm": "Functional, Object-Oriented",
            "creator": "Martin Odersky",
            "description": "Combines object-oriented and functional programming in one concise, high-level language.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg"
        },
        {
            "id": 16,
            "name": "Kotlin",
            "created_in": "2011",
            "paradigm": "Object-Oriented, Functional",
            "creator": "JetBrains",
            "description": "A modern language fully interoperable with Java, designed for Android development.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
        },
        {
            "id": 17,
            "name": "F#",
            "created_in": "2005",
            "paradigm": "Functional, Object-Oriented",
            "creator": "Microsoft",
            "description": "A functional-first programming language developed by Microsoft.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fsharp/fsharp-original.svg"
        },
        {
            "id": 18,
            "name": "Erlang",
            "created_in": "1986",
            "paradigm": "Concurrent, Functional",
            "creator": "Joe Armstrong, Robert Virding",
            "description": "Used for highly concurrent, distributed systems such as telecommunications switches.",
            "logo_image": " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/erlang/erlang-original.svg"
        },
    ]

export default languages;
