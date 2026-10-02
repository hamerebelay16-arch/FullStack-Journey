/* ── Courses & Chapters Data ────────────────────────────── */

const COURSES = [
  {
    id: "mgt-221",
    title: "Management: An Overview",
    code: "Mgt 221",
    icon: "📊",
    description: "Principles, functions, and managerial roles in modern organizations.",
    chapters: [
      {
        id: "ch1",
        title: "Chapter 1: Management Overview",
        subtitle: "Managerial functions, roles, skills, and classification.",
        timePerQuestion: 20,
        questions: [
          {
            question: "According to the chapter, when does a \"real plan\" exist?",
            alternatives: [
              "When a planning study or analysis has been completed",
              "When a proposal has been written and circulated",
              "When a decision committing human or material resources has been made",
              "When alternative courses of action have been identified"
            ],
            correct: 2
          },
          {
            question: "Which managerial function is described as the \"heart and soul of management\" and the most complex because it deals with complex human behavior?",
            alternatives: [
              "Planning",
              "Organizing",
              "Leading/Directing",
              "Controlling"
            ],
            correct: 2
          },
          {
            question: "A manager determines which tasks are to be done, how they combine into jobs, and how jobs are grouped into units. Which function is this?",
            alternatives: [
              "Staffing",
              "Organizing",
              "Planning",
              "Controlling"
            ],
            correct: 1
          },
          {
            question: "Which of the following activities belongs to the controlling function?",
            alternatives: [
              "Recruiting and selecting candidates for vacant positions",
              "Measuring performance against standards and dealing with deviations",
              "Choosing future courses of action from alternatives",
              "Motivating employees toward group goals"
            ],
            correct: 1
          },
          {
            question: "Why is planning described as the first managerial function?",
            alternatives: [
              "Because only top managers perform it",
              "Because it lays the groundwork for the other functions, which themselves must be planned",
              "Because it is the most time-consuming function at every level",
              "Because it is the only function that involves decision-making"
            ],
            correct: 1
          },
          {
            question: "Which statement best explains why first-line managers are called \"People in the Middle\"?",
            alternatives: [
              "They sit between top managers and middle managers in the hierarchy",
              "They supervise both managers and non-managers",
              "They are neither fully management nor labor, empathizing with subordinates while reflecting the company's viewpoint",
              "They spend equal time on planning and leading"
            ],
            correct: 2
          },
          {
            question: "What most clearly distinguishes middle managers from first-line managers?",
            alternatives: [
              "Middle managers' subordinates are themselves managers",
              "Middle managers are directly responsible for producing goods and services",
              "Middle managers establish company-wide objectives",
              "Middle managers spend most of their time leading operating employees"
            ],
            correct: 0
          },
          {
            question: "According to the chapter, how does time spent on managerial functions vary by level?",
            alternatives: [
              "First-line managers spend the most time on planning and organizing",
              "Top managers spend more time on planning and organizing; first-line managers spend a great deal on leading",
              "All levels spend equal time on every function",
              "Staffing and controlling vary dramatically across levels"
            ],
            correct: 1
          },
          {
            question: "The classification of managers into functional and general managers is based on which criterion?",
            alternatives: [
              "Levels of management (vertical difference)",
              "Scope of responsibility (horizontal difference)",
              "Years of experience",
              "Type of organization (profit vs. non-profit)"
            ],
            correct: 1
          },
          {
            question: "A manager oversees a subsidiary and is responsible for its production, marketing, sales and finance. This manager is best described as a:",
            alternatives: [
              "Functional manager",
              "First-line manager",
              "General manager",
              "Staff specialist"
            ],
            correct: 2
          },
          {
            question: "A university president hands out diplomas at graduation. Which Mintzberg role is this?",
            alternatives: [
              "Spokesperson",
              "Liaison",
              "Figurehead",
              "Disseminator"
            ],
            correct: 2
          },
          {
            question: "What is the key difference between the figurehead and spokesperson roles?",
            alternatives: [
              "The figurehead works internally; the spokesperson works externally",
              "The figurehead is a symbolic presence; the spokesperson formally carries and communicates information",
              "The figurehead is decisional; the spokesperson is interpersonal",
              "There is no difference between them"
            ],
            correct: 1
          },
          {
            question: "A manager reads trade publications, attends exhibitions, and talks to clients to find out what is happening in the environment. Then she shares some of this with her team. Which pair of roles is she playing?",
            alternatives: [
              "Liaison and leader",
              "Monitor and disseminator",
              "Entrepreneur and negotiator",
              "Spokesperson and figurehead"
            ],
            correct: 1
          },
          {
            question: "A sudden strike breaks out and the manager takes corrective action to restore normal operations. Which decisional role is this?",
            alternatives: [
              "Entrepreneur",
              "Resource allocator",
              "Negotiator",
              "Disturbance handler"
            ],
            correct: 3
          },
          {
            question: "Approving budgets, scheduling meetings, and assigning work to subordinates are examples of which role?",
            alternatives: [
              "Resource allocator",
              "Leader",
              "Entrepreneur",
              "Monitor"
            ],
            correct: 0
          },
          {
            question: "According to the chapter, which statement about the importance of managerial skills across levels is correct?",
            alternatives: [
              "Technical skill is most important at top level; conceptual skill at first-line level",
              "Human skill is equally important at all levels, but probably most important at lower levels",
              "Conceptual skill is equally important at all levels",
              "Human skill becomes unimportant at the top level"
            ],
            correct: 1
          },
          {
            question: "A manager who can see how a change in one department will ripple through the whole organization is demonstrating primarily which skill?",
            alternatives: [
              "Technical skill",
              "Human relations skill",
              "Conceptual skill",
              "Operational skill"
            ],
            correct: 2
          },
          {
            question: "The chapter concludes that \"the art of management begins where the science of management stops.\" What does this imply?",
            alternatives: [
              "Management is purely an art and science has no role",
              "Managers must use intuition and common sense to decide when data is insufficient, with art and science being complementary",
              "Science and art are mutually exclusive approaches to management",
              "Management becomes a pure science once enough data is collected"
            ],
            correct: 1
          }
        ]
      },
      {
        id: "ch2",
        title: "Chapter 2: Development of Management Thought",
        subtitle: "Classical, behavioral, systems, and contingency approaches.",
        timePerQuestion: 20,
        questions: [
          {
            question: "Jethro advised Moses that rulers should handle routine matters and \"bring to Moses the important questions.\" This forms the basis of which control procedure?",
            alternatives: [
              "The gangplank principle",
              "The principle of exception",
              "The scalar chain",
              "Compulsory staff service"
            ],
            correct: 1
          },
          {
            question: "Diocletian reorganized the Roman Empire into 4 geographical areas, 13 dioceses and 100 provinces. What management concept does this best illustrate?",
            alternatives: [
              "Compulsory staff service",
              "Motion study and uniform methods",
              "Adding levels to the hierarchy and delegating authority",
              "Centralizing all decisions with the emperor"
            ],
            correct: 2
          },
          {
            question: "Which best describes \"staff independence,\" one of the Roman Catholic Church's contributions to management thought?",
            alternatives: [
              "Advisors were assigned to key officials and could not be removed by them, so they could advise without fear of reprisal",
              "Certain hierarchs were required to seek advice from others before making particular decisions",
              "Priests were free to choose their own duties",
              "Training was required to become a pope, bishop or priest"
            ],
            correct: 0
          },
          {
            question: "How did Charles Babbage extend Adam Smith's idea of work specialization?",
            alternatives: [
              "He argued that specialization raises training costs",
              "He limited specialization to machine operations",
              "He proposed specialization only for managers",
              "He recognized that mental work, not only physical work, could be specialized"
            ],
            correct: 3
          },
          {
            question: "Adam Smith gave reasons why specialization increases efficiency. Which of the following is NOT one of them?",
            alternatives: [
              "It increases the dexterity of each worker",
              "It saves time lost in moving from one kind of work to another",
              "It helps the invention of machines that let one person do the work of many",
              "It reduces the need for incentive pay"
            ],
            correct: 3
          },
          {
            question: "After studying \"soldiering,\" whom did Taylor conclude was primarily responsible for it?",
            alternatives: [
              "Workers, because of laziness",
              "Labor unions",
              "Managers, who failed to design jobs and wage systems that encouraged productivity",
              "Government regulations"
            ],
            correct: 2
          },
          {
            question: "Which of Taylor's studies aimed to scientifically select the best worker for a given job, considering initial skill and potential for learning?",
            alternatives: [
              "Individual incentive study",
              "Functional foremanship study",
              "Time and motion study",
              "Uniform method of routine tasks"
            ],
            correct: 1
          },
          {
            question: "Which pairing of the Gilbreths' contributions is correct?",
            alternatives: [
              "Frank: \"First Lady of Management\"; Lillian: \"Father of Motion Study\"",
              "Frank: inventor of the Gantt chart; Lillian: piece-rate pay system",
              "Frank: identified 17 therbligs, \"Father of Motion Study\"; Lillian: pioneered personnel administration, \"First Lady of Management\"",
              "Frank: \"Father of Scientific Management\"; Lillian: functional foremanship"
            ],
            correct: 2
          },
          {
            question: "The Gantt chart is a graph method of scheduling work according to which basis?",
            alternatives: [
              "The amount of time required, instead of the quantity of work to be performed",
              "The quantity of work to be performed, instead of time required",
              "Worker seniority",
              "Piece-rate output per worker"
            ],
            correct: 0
          },
          {
            question: "Which of the following is NOT listed as a limitation of scientific management?",
            alternatives: [
              "It equated workers with machines",
              "It saw money as the only motivator",
              "It overlooked the human desire for job satisfaction",
              "It stressed scientific selection and development of workers"
            ],
            correct: 3
          },
          {
            question: "What is the main difference between scientific management and classical organization theory?",
            alternatives: [
              "Scientific management focused on top managers; classical organization theory focused on the shop floor",
              "Scientific management rejected efficiency; classical organization theory embraced it",
              "Scientific management focused on production-level problems of lower managers; classical organization theory focused on the entire organization and top managers' problems",
              "Classical organization theory rejected division of labor"
            ],
            correct: 2
          },
          {
            question: "A clerk receives conflicting instructions from the finance manager and the marketing manager. Which Fayol principle is being violated?",
            alternatives: [
              "Unity of direction",
              "Scalar chain",
              "Unity of command",
              "Order"
            ],
            correct: 2
          },
          {
            question: "According to the chapter, how do unity of command and unity of direction differ?",
            alternatives: [
              "Unity of command concerns pay; unity of direction concerns discipline",
              "Unity of command concerns the whole organization; unity of direction concerns individual employees",
              "Unity of command concerns authority; unity of direction concerns responsibility",
              "Unity of command relates to personnel (one boss per employee); unity of direction relates to the organization as a whole (one head, one plan)"
            ],
            correct: 3
          },
          {
            question: "What does Fayol's gangplank principle allow?",
            alternatives: [
              "People at the same level may communicate directly, with their superiors' permission, and inform their chiefs afterward",
              "Any employee may bypass the chain of command whenever they wish",
              "Subordinates may skip a level to report to the top executive",
              "Written communication replaces oral communication"
            ],
            correct: 0
          },
          {
            question: "The text notes that unity of command seems to contradict division of labor. Which limitation of classical organization theory does this illustrate?",
            alternatives: [
              "The principles are applicable only to very small firms",
              "The principles ignore efficiency",
              "The principles apply only to non-profit organizations",
              "The principles are too general and give no guidance on which should take precedence"
            ],
            correct: 3
          },
          {
            question: "In the relay assembly test room, what did Mayo and his associates conclude was the major reason for the increase in productivity?",
            alternatives: [
              "The introduction of rest pauses",
              "Higher wages",
              "The change in supervisory management and the new social environment",
              "Improved lighting"
            ],
            correct: 2
          },
          {
            question: "What did the Bank Wiring Observation Room study find?",
            alternatives: [
              "The work group set a norm for a fair day's output, and group acceptance mattered more than the wage incentive",
              "Group piecework incentives led workers to maximize productivity, with faster workers successfully pressuring slower ones",
              "Productivity was strongly correlated with intelligence and dexterity",
              "Productivity rose whenever illumination was increased"
            ],
            correct: 0
          },
          {
            question: "What is the \"Hawthorne effect\"?",
            alternatives: [
              "Productivity falls when pay is cut",
              "Group norms restrict individual output",
              "Physical conditions determine worker output",
              "Individuals singled out for a study may improve performance simply because of the added attention they receive"
            ],
            correct: 3
          },
          {
            question: "An organization continually monitors its environment and brings in new inputs and feedback to delay its own decay. Which systems concept does this describe?",
            alternatives: [
              "Differentiation",
              "Synergy",
              "Negative entropy",
              "Steady state"
            ],
            correct: 2
          },
          {
            question: "What observation prompted the development of contingency theory?",
            alternatives: [
              "Workers' social needs were being overlooked",
              "Some classical principles, such as unity of command, could sometimes be violated with positive results",
              "Illumination had no effect on productivity",
              "Organizations were found to be closed systems"
            ],
            correct: 1
          }
        ]
      }
    ]
  },
  {
    id: "insy-2031",
    title: "Fundamentals of Database Systems",
    code: "INSY 2031",
    icon: "🗄️",
    description: "Database concepts, ANSI-SPARC architecture, SQL statements, and data models.",
    chapters: [
      {
        id: "ch1",
        title: "Chapter 1: Intro to Database Systems & Architecture",
        subtitle: "File-based vs DBMS, ANSI-SPARC levels, schemas, and data models.",
        timePerQuestion: 20,
        questions: [
          {
            question: "In a file-based system, changing the structure of a data file forces the programmer to modify the application program that uses it. Which limitation is this?",
            alternatives: [
              "Uncontrolled redundancy",
              "Incompatible file formats",
              "Program-data dependence",
              "Fixed queries"
            ],
            correct: 2
          },
          {
            question: "Each program keeps its own data, and users of one program are unaware of potentially useful data held by other programs. Which file-based limitation does this describe?",
            alternatives: [
              "Separation and isolation of data",
              "Uncontrolled redundancy",
              "Fixed queries",
              "Incompatible file formats"
            ],
            correct: 0
          },
          {
            question: "What provides the description of data that enables program-data independence in the database approach?",
            alternatives: [
              "The application program",
              "A view",
              "The transaction log",
              "The system catalogue (metadata)"
            ],
            correct: 3
          },
          {
            question: "GRANT and REVOKE belong to which category of SQL statements?",
            alternatives: [
              "DDL",
              "DML",
              "DCL",
              "TCL"
            ],
            correct: 2
          },
          {
            question: "Which Transaction Control Language statement is used to undo a transaction when an error occurs?",
            alternatives: [
              "COMMIT",
              "ROLLBACK",
              "REVOKE",
              "BEGIN"
            ],
            correct: 1
          },
          {
            question: "Which of the following is NOT a benefit of database views?",
            alternatives: [
              "Reducing complexity for the user",
              "Providing a level of security",
              "Customizing the appearance of the database",
              "Increasing the amount of stored redundant data"
            ],
            correct: 3
          },
          {
            question: "Which role is technically oriented and responsible for the physical realization of the database, security and integrity control, and performance optimization?",
            alternatives: [
              "Data Administrator (DA)",
              "Database Administrator (DBA)",
              "Logical database designer",
              "Application programmer"
            ],
            correct: 1
          },
          {
            question: "Who takes the logical design specification as input, maps it onto the specified DBMS in terms of tables and integrity constraints, and selects storage structures and access paths?",
            alternatives: [
              "Physical database designer",
              "Logical and conceptual database designer",
              "System analyst",
              "Application programmer"
            ],
            correct: 0
          },
          {
            question: "A middle manager accesses the database only occasionally, needing different information each time. Which type of end user is she?",
            alternatives: [
              "Naive user",
              "Sophisticated user",
              "Casual user",
              "Application programmer"
            ],
            correct: 2
          },
          {
            question: "Which matching of DBMS generations is correct?",
            alternatives: [
              "First: relational; Second: hierarchical and network; Third: object-oriented",
              "First: hierarchical and network; Second: object-oriented; Third: relational",
              "First: relational; Second: object-relational; Third: hierarchical",
              "First: hierarchical and network; Second: relational; Third: object-relational and object-oriented"
            ],
            correct: 3
          },
          {
            question: "Which of the following is NOT a disadvantage of DBMSs?",
            alternatives: [
              "Complexity",
              "Control of data redundancy",
              "Cost of conversion",
              "Higher impact of a failure"
            ],
            correct: 1
          },
          {
            question: "Which level of the ANSI-SPARC architecture describes how data is physically stored, the way the OS and DBMS view it?",
            alternatives: [
              "Internal level",
              "External level",
              "Conceptual level",
              "Logical level"
            ],
            correct: 0
          },
          {
            question: "A new entity is added to the conceptual schema, yet existing application programs need no rewriting. Which property does this demonstrate?",
            alternatives: [
              "Physical data independence",
              "Data redundancy",
              "Logical data independence",
              "Data integrity"
            ],
            correct: 2
          },
          {
            question: "Physical data independence refers to the immunity of which of the following?",
            alternatives: [
              "External schemas to changes in the conceptual schema",
              "The conceptual schema to changes in the internal schema (e.g., storage structures or devices)",
              "The internal schema to changes in external schemas",
              "Application programs to hardware failures"
            ],
            correct: 1
          },
          {
            question: "Which mapping enables the DBMS to find the actual records in physical storage that constitute a logical record in the conceptual schema?",
            alternatives: [
              "External/conceptual mapping",
              "External/internal mapping",
              "Internal/physical mapping",
              "Conceptual/internal mapping"
            ],
            correct: 3
          },
          {
            question: "How does the material distinguish a conceptual data model from a logical data model?",
            alternatives: [
              "The conceptual model is independent of all implementation details; the logical model assumes knowledge of the target DBMS's data model",
              "The conceptual model depends on the target DBMS; the logical model is implementation-independent",
              "They are always identical",
              "The conceptual model describes physical storage; the logical model describes user views"
            ],
            correct: 0
          },
          {
            question: "Which statement is true of the network data model but NOT of the hierarchical data model?",
            alternatives: [
              "A child node may have only one parent",
              "Relationships are strictly one-to-many",
              "Member records may have more than one owner, allowing many-to-many relationships",
              "Data is stored as tables of tuples"
            ],
            correct: 2
          },
          {
            question: "In relational terminology, a row of a relation is called a ___ (equivalent to a record), and a column is called an ___ (equivalent to a field).",
            alternatives: [
              "Attribute; tuple",
              "Tuple; attribute",
              "Domain; relation",
              "Entity; schema"
            ],
            correct: 1
          },
          {
            question: "Large network traffic, a full copy of the DBMS needed on each workstation, and more complex concurrency, recovery and integrity control are disadvantages of which multi-user architecture?",
            alternatives: [
              "Teleprocessing",
              "Three-tier client-server",
              "Two-tier client-server",
              "File-server"
            ],
            correct: 3
          },
          {
            question: "What problems of the traditional two-tier client-server model led to the three-tier architecture?",
            alternatives: [
              "A \"fat\" client needing considerable resources, and significant client-side administration overhead",
              "A central computer overloaded by serving dumb terminals",
              "Heavy network traffic from file transfers",
              "Inability to run on a local area network"
            ],
            correct: 0
          }
        ]
      }
    ]
  },
  {
    id: "cpp-101",
    title: "Programming in C++",
    code: "C++",
    icon: "💻",
    description: "Arrays, 2D arrays, C-strings, standard library functions, and structures.",
    chapters: [
      {
        id: "ch1",
        title: "Chapter 1: Arrays & Structures",
        subtitle: "1D & 2D arrays, C-strings, cstring/cstdlib functions, and structs.",
        timePerQuestion: 20,
        questions: [
          {
            question: "Given int day[5]; what is the outcome of executing day[5] = 10; in C++?",
            alternatives: [
              "A compilation error",
              "The array automatically grows to six elements",
              "It compiles, but may cause unexpected results or serious runtime errors",
              "The compiler ignores the statement and stores 0"
            ],
            correct: 2
          },
          {
            question: "Which array declaration is valid according to the chapter?",
            alternatives: [
              "int n; cin >> n; int arr[n];",
              "int arr[10*sizeof(int)];",
              "int arr[];",
              "int arr[5.5];"
            ],
            correct: 1
          },
          {
            question: "A local array int x[5]; is declared inside main(), and a global array int y[5]; is declared outside any function. What are their initial contents?",
            alternatives: [
              "x holds undetermined values; y holds all zeros",
              "Both hold all zeros",
              "Both hold undetermined values",
              "x holds all zeros; y holds undetermined values"
            ],
            correct: 0
          },
          {
            question: "Given int a[10] = {10, 2, 3}; what is the value of a[2] + a[9]?",
            alternatives: [
              "Indeterminate",
              "Compile error",
              "12",
              "3"
            ],
            correct: 3
          },
          {
            question: "Given int arr[] = {16, 2, 77, 40, 12071}; and int ar[4]; which statement is legal?",
            alternatives: [
              "ar = arr;",
              "ar[] = {1, 2, 3, 4};",
              "ar[2] = arr[0];",
              "arr = {1, 2, 3};"
            ],
            correct: 2
          },
          {
            question: "int day[5] = {16, 2, 77, 40, 12071}; int a = 1; day[a] = 3; int b = day[day[a]]; What is the value of b?",
            alternatives: [
              "3",
              "40",
              "77",
              "12071"
            ],
            correct: 1
          },
          {
            question: "int day[] = {16, 2, 77, 40, 12071}; int n, result = 0; for (n = 0; n < 5; n++) result += day[n]; cout << result; What is displayed?",
            alternatives: [
              "12206",
              "12190",
              "135",
              "12071"
            ],
            correct: 0
          },
          {
            question: "firstarray = {5, 10, 15}. After calling mult(firstarray, 3), which doubles each element via arg[n] = 2*arg[n], what does printarray(firstarray, 3) display?",
            alternatives: [
              "5 10 15",
              "2 4 6",
              "A compile error",
              "10 20 30"
            ],
            correct: 3
          },
          {
            question: "Why does printarray(int arg[], int length) take a second parameter?",
            alternatives: [
              "Because every C++ function must have two parameters",
              "Because the length is needed to pass the array by value",
              "Because int arg[] accepts any int array, so the function cannot otherwise know its length",
              "Because arrays are zero-bounded"
            ],
            correct: 2
          },
          {
            question: "char mystring[] = \"Hello\"; The compiler declares mystring with how many elements?",
            alternatives: [
              "5",
              "6",
              "7",
              "Undefined"
            ],
            correct: 1
          },
          {
            question: "Given char mystring[20]; which is a valid way to put \"Hello\" into it after declaration?",
            alternatives: [
              "mystring = \"Hello\";",
              "mystring[] = \"Hello\";",
              "strcpy(mystring, \"Hello\");",
              "mystring = {'H','e','l','l','o','\\0'};"
            ],
            correct: 2
          },
          {
            question: "Which statement about cin >> mybuffer (for a char array) is correct?",
            alternatives: [
              "It reads a single word, stopping at any blank character, and gives no way to limit input size",
              "It reads whole sentences up to the newline",
              "It lets you specify both a buffer length and a delimiter",
              "It automatically converts the input to an integer"
            ],
            correct: 0
          },
          {
            question: "Which lists the stdlib.h functions that convert a string to int, long, and float respectively?",
            alternatives: [
              "atof, atol, atoi",
              "atol, atoi, atof",
              "atoi, atof, atol",
              "atoi, atol, atof"
            ],
            correct: 3
          },
          {
            question: "strcmp(string1, string2) returns a negative integer. What does this mean?",
            alternatives: [
              "The two strings are equal",
              "The first string is less than the second",
              "The first string is greater than the second",
              "The strings have different lengths"
            ],
            correct: 1
          },
          {
            question: "char d[20] = \"Hi \"; strncat(d, \"Abebe\", 3); What does d contain?",
            alternatives: [
              "Hi Abe",
              "Hi Abebe",
              "Abe",
              "Hi Abe3"
            ],
            correct: 0
          },
          {
            question: "Given int matrix[3][5]; which expression refers to the element in the second row and fourth column?",
            alternatives: [
              "matrix[2][4]",
              "matrix[4][2]",
              "matrix[1][3]",
              "matrix[3][5]"
            ],
            correct: 2
          },
          {
            question: "With HEIGHT = 3 and WIDTH = 5, the loops assign matrix[n][m] = (n+1)*(m+1) for n in 0..HEIGHT-1 and m in 0..WIDTH-1. What is matrix[2][3]?",
            alternatives: [
              "6",
              "8",
              "15",
              "12"
            ],
            correct: 3
          },
          {
            question: "Which statement about a structure tag (e.g., the \"student\" in struct student) is correct?",
            alternatives: [
              "It is a variable that holds the structure's data",
              "It is a label for the structure's format, acting like a programmer-defined data type",
              "It reserves memory as soon as the struct is defined",
              "It is optional and has no purpose"
            ],
            correct: 1
          },
          {
            question: "Which statement about assigning structures is correct according to the chapter?",
            alternatives: [
              "A whole structure can be assigned to another of the same type with one statement, unlike arrays",
              "Only arrays, not structures, can be assigned as a whole",
              "Structures can only be copied member by member using strcpy",
              "Structure assignment is not allowed in C++"
            ],
            correct: 0
          },
          {
            question: "Given struct Company {int employees; int registers; double sales;} store[1000]; which statement increases the number of employees of the fifth store by three?",
            alternatives: [
              "store[5].employees += 3;",
              "store.employees[4] += 3;",
              "store[4].employees += 3;",
              "employees.store[4] += 3;"
            ],
            correct: 2
          }
        ]
      }
    ]
  }
];

const TIMER_WARNING_AT = 5;

/* ── DOM Elements ───────────────────────────────────────── */

const ui = {
  // Screens
  landingScreen: document.getElementById("landing-screen"),
  courseScreen: document.getElementById("course-screen"),
  chapterScreen: document.getElementById("chapter-screen"),
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),

  // Landing Elements
  statCourses: document.getElementById("stat-courses"),
  statChapters: document.getElementById("stat-chapters"),
  statQuestions: document.getElementById("stat-questions"),
  exploreBtn: document.getElementById("explore-btn"),

  // Header & Navigation
  eyebrow: document.getElementById("quiz-eyebrow"),
  title: document.getElementById("quiz-title"),
  subtitle: document.getElementById("quiz-subtitle"),
  backBtn: document.getElementById("back-btn"),

  // Containers
  courseList: document.getElementById("course-list"),
  chapterList: document.getElementById("chapter-list"),

  // Start Screen Elements
  factQuestions: document.getElementById("fact-questions"),
  factTime: document.getElementById("fact-time"),
  startBtn: document.getElementById("startbtn"),

  // Quiz Screen Elements
  progressBar: document.getElementById("progress-bar"),
  progressText: document.getElementById("progress-text"),
  timer: document.getElementById("timer"),
  question: document.getElementById("question"),
  answers: document.getElementById("answers"),
  nextBtn: document.getElementById("nextbtn"),

  // Result Screen Elements
  finalScore: document.getElementById("final-score"),
  resultMessage: document.getElementById("result-message"),
  restartBtn: document.getElementById("restartbtn"),
  changeTopicBtn: document.getElementById("change-topic-btn"),

  // Quit Confirmation Modal
  confirmModal: document.getElementById("confirm-modal"),
  modalCancelBtn: document.getElementById("modal-cancel-btn"),
  modalConfirmBtn: document.getElementById("modal-confirm-btn"),
};

/* ── State ──────────────────────────────────────────────── */

const state = {
  currentCourse: null,
  currentChapter: null,
  questionIndex: 0,
  score: 0,
  answered: false,
  timerId: null,
};

/* ── Helpers ────────────────────────────────────────────── */

function pluralize(count, singular, plural = `${singular}s`) {
  return count === 1 ? singular : plural;
}

function showScreen(targetScreen) {
  const screens = [
    ui.landingScreen,
    ui.courseScreen,
    ui.chapterScreen,
    ui.startScreen,
    ui.quizScreen,
    ui.resultScreen,
  ];

  screens.forEach((screen) => {
    if (screen === targetScreen) {
      screen.classList.remove("hide");
    } else {
      screen.classList.add("hide");
    }
  });

  // Show or hide global top back button
  if (targetScreen === ui.landingScreen) {
    ui.backBtn.classList.add("hide");
  } else {
    ui.backBtn.classList.remove("hide");
  }
}

function getStorageKey(courseId, chapterId) {
  return `kb_score_${courseId}_${chapterId}`;
}

function getStoredHighest(courseId, chapterId) {
  const key = getStorageKey(courseId, chapterId);
  const stored = Number(localStorage.getItem(key));
  return Number.isFinite(stored) ? stored : 0;
}

function saveHighestIfNeeded() {
  if (!state.currentCourse || !state.currentChapter) return;
  const currentHighest = getStoredHighest(
    state.currentCourse.id,
    state.currentChapter.id
  );

  if (state.score > currentHighest) {
    const key = getStorageKey(state.currentCourse.id, state.currentChapter.id);
    localStorage.setItem(key, state.score);
  }
}

function updateHeader() {
  if (!state.currentCourse) {
    ui.eyebrow.textContent = "Information Science Department";
    ui.title.textContent = "Knowledge Bytes";
    ui.subtitle.textContent = "Select a course to start mastering your study material.";
    return;
  }

  if (state.currentCourse && !state.currentChapter) {
    ui.eyebrow.textContent = state.currentCourse.code;
    ui.title.textContent = state.currentCourse.title;
    ui.subtitle.textContent = "Select a chapter to review questions.";
    return;
  }

  ui.eyebrow.textContent = `${state.currentCourse.code} • ${state.currentChapter.title}`;
  ui.title.textContent = state.currentChapter.title;
  ui.subtitle.textContent = state.currentChapter.subtitle || "Test your mastery of this chapter.";
}

function getResultMessage(score, total) {
  const percentage = (score / total) * 100;
  if (percentage === 100) return "Mastery unlocked! Perfect score on this chapter.";
  if (percentage >= 75) return "Great job! You have a solid grasp of this material.";
  if (percentage >= 50) return "Good attempt! Review the chapter notes to sharpen your knowledge.";
  return "Needs more study. Re-read the chapter and try again!";
}

function replayEnterAnimation(element) {
  element.classList.remove("is-entering");
  void element.offsetWidth;
  element.classList.add("is-entering");
}

/* ── Screen Renderers ───────────────────────────────────── */

function renderLandingScreen() {
  state.currentCourse = null;
  state.currentChapter = null;
  stopTimer();

  ui.eyebrow.textContent = "Information Science Department";
  ui.title.textContent = "Knowledge Bytes";
  ui.subtitle.textContent = "Interactive Quiz & Study Hub";

  let totalChapters = 0;
  let totalQuestions = 0;

  COURSES.forEach((course) => {
    totalChapters += course.chapters.length;
    course.chapters.forEach((ch) => {
      totalQuestions += ch.questions.length;
    });
  });

  if (ui.statCourses) ui.statCourses.textContent = COURSES.length;
  if (ui.statChapters) ui.statChapters.textContent = totalChapters;
  if (ui.statQuestions) ui.statQuestions.textContent = totalQuestions;

  showScreen(ui.landingScreen);
}

function renderCourseSelection() {
  state.currentCourse = null;
  state.currentChapter = null;
  stopTimer();
  updateHeader();

  ui.courseList.innerHTML = COURSES.map((course) => `
    <div class="course-card" data-id="${course.id}">
      <div class="card-icon">${course.icon}</div>
      <div class="card-content">
        <span class="card-code">${course.code}</span>
        <h3 class="card-title">${course.title}</h3>
        <p class="card-desc">${course.description}</p>
        <span class="card-meta">${course.chapters.length} ${pluralize(course.chapters.length, "Chapter")}</span>
      </div>
    </div>
  `).join("");

  showScreen(ui.courseScreen);
}

function renderChapterSelection(course) {
  state.currentCourse = course;
  state.currentChapter = null;
  stopTimer();
  updateHeader();

  ui.chapterList.innerHTML = course.chapters.map((ch) => {
    const highest = getStoredHighest(course.id, ch.id);
    const totalQ = ch.questions.length;
    const scoreDisplay = localStorage.getItem(getStorageKey(course.id, ch.id)) !== null 
      ? `Best: ${highest}/${totalQ}`
      : "Not started";

    return `
      <div class="chapter-card" data-id="${ch.id}">
        <div class="chapter-info">
          <h3>${ch.title}</h3>
          <p>${ch.subtitle || `${totalQ} questions`}</p>
        </div>
        <div class="chapter-badge">${scoreDisplay}</div>
      </div>
    `;
  }).join("");

  showScreen(ui.chapterScreen);
}

function renderStartScreen(chapter) {
  state.currentChapter = chapter;
  stopTimer();
  updateHeader();

  const count = chapter.questions.length;
  const timeLimit = chapter.timePerQuestion || 20;

  ui.factQuestions.textContent = `${count} ${pluralize(count, "Question")}`;
  ui.factTime.textContent = `${timeLimit}s / question`;

  showScreen(ui.startScreen);
}

/* ── Timer Logic ────────────────────────────────────────── */

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startTimer() {
  stopTimer();

  const timeLimit = state.currentChapter.timePerQuestion || 20;
  let timeLeft = timeLimit;

  ui.timer.textContent = timeLeft;
  ui.timer.classList.remove("warning");

  state.timerId = setInterval(() => {
    timeLeft -= 1;
    ui.timer.textContent = timeLeft;
    ui.timer.classList.toggle("warning", timeLeft <= TIMER_WARNING_AT);

    if (timeLeft === 0) {
      stopTimer();
      goToNextQuestion();
    }
  }, 1000);
}

/* ── Quiz Flow ─────────────────────────────────────────── */

function renderQuestion() {
  const currentQ = state.currentChapter.questions[state.questionIndex];

  replayEnterAnimation(ui.question);
  ui.question.textContent = currentQ.question;

  ui.answers.innerHTML = currentQ.alternatives
    .map(
      (text, index) => `
        <button class="answer-btn" data-index="${index}" type="button">
          <span class="option-letter">${String.fromCharCode(65 + index)}</span>
          <span>${text}</span>
        </button>`
    )
    .join("");
}

function updateProgress() {
  const current = state.questionIndex + 1;
  const total = state.currentChapter.questions.length;

  ui.progressText.textContent = `Question ${current} of ${total}`;
  ui.progressBar.style.width = `${(current / total) * 100}%`;
}

function displayQuestion() {
  updateProgress();
  renderQuestion();
  startTimer();
}

function startQuiz() {
  state.questionIndex = 0;
  state.score = 0;
  state.answered = false;

  showScreen(ui.quizScreen);
  displayQuestion();
}

function goToNextQuestion() {
  const isLastQuestion =
    state.questionIndex === state.currentChapter.questions.length - 1;

  if (isLastQuestion) {
    finishQuiz();
    return;
  }

  state.questionIndex += 1;
  state.answered = false;
  displayQuestion();
}

function finishQuiz() {
  stopTimer();
  saveHighestIfNeeded();
  updateHeader();

  const total = state.currentChapter.questions.length;
  ui.finalScore.textContent = `${state.score} / ${total}`;
  ui.resultMessage.textContent = getResultMessage(state.score, total);

  showScreen(ui.resultScreen);
}

function handleAnswerClick(event) {
  if (state.answered) return;

  const button = event.target.closest(".answer-btn");
  if (!button) return;

  state.answered = true;
  stopTimer();

  const selectedIndex = Number(button.dataset.index);
  const correctIndex = state.currentChapter.questions[state.questionIndex].correct;
  const isCorrect = selectedIndex === correctIndex;

  if (isCorrect) {
    button.classList.add("green");
    state.score += 1;
  } else {
    button.classList.add("red");
    // highlight correct answer
    const allButtons = ui.answers.querySelectorAll(".answer-btn");
    if (allButtons[correctIndex]) {
      allButtons[correctIndex].classList.add("green");
    }
  }
}

function showQuitModal() {
  if (ui.confirmModal) {
    ui.confirmModal.classList.remove("hide");
  }
}

function hideQuitModal() {
  if (ui.confirmModal) {
    ui.confirmModal.classList.add("hide");
  }
}

function handleBackNavigation() {
  if (!ui.quizScreen.classList.contains("hide")) {
    showQuitModal();
    return;
  }

  if (!ui.resultScreen.classList.contains("hide") || !ui.startScreen.classList.contains("hide")) {
    renderChapterSelection(state.currentCourse);
    return;
  }

  if (!ui.chapterScreen.classList.contains("hide")) {
    renderCourseSelection();
    return;
  }

  if (!ui.courseScreen.classList.contains("hide")) {
    renderLandingScreen();
    return;
  }
}

/* ── Event Listeners ────────────────────────────────────── */

if (ui.exploreBtn) {
  ui.exploreBtn.addEventListener("click", renderCourseSelection);
}

if (ui.modalCancelBtn) {
  ui.modalCancelBtn.addEventListener("click", hideQuitModal);
}

if (ui.modalConfirmBtn) {
  ui.modalConfirmBtn.addEventListener("click", () => {
    hideQuitModal();
    stopTimer();
    renderChapterSelection(state.currentCourse);
  });
}

ui.courseList.addEventListener("click", (e) => {
  const card = e.target.closest(".course-card");
  if (!card) return;
  const courseId = card.dataset.id;
  const course = COURSES.find((c) => c.id === courseId);
  if (course) renderChapterSelection(course);
});

ui.chapterList.addEventListener("click", (e) => {
  const card = e.target.closest(".chapter-card");
  if (!card) return;
  const chapterId = card.dataset.id;
  const chapter = state.currentCourse.chapters.find((ch) => ch.id === chapterId);
  if (chapter) renderStartScreen(chapter);
});

ui.startBtn.addEventListener("click", startQuiz);
ui.answers.addEventListener("click", handleAnswerClick);
ui.nextBtn.addEventListener("click", goToNextQuestion);
ui.restartBtn.addEventListener("click", startQuiz);
ui.changeTopicBtn.addEventListener("click", renderCourseSelection);
ui.backBtn.addEventListener("click", handleBackNavigation);

/* ── Init ───────────────────────────────────────────────── */

function init() {
  renderLandingScreen();
}

init();
