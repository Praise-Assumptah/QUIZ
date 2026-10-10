// ============================================================
//  QUIZ PRO: PRAIZO — Quiz Data
//  All 10 course units with questions grouped by topic
// ============================================================

const COURSES = [
  // ── 1. PYTHON ────────────────────────────────────────────
  {
    id: "python",
    title: "Python Programming",
    icon: "🐍",
    color: "#3776ab",
    gradient: "linear-gradient(135deg,#3776ab,#ffd43b)",
    desc: "Core Python: syntax, data structures, OOP, and more",
    topics: [
      {
        name: "Basics & Syntax",
        questions: [
          { q: "What is the output of: print(type(3.14))?", options: ["<class 'int'>","<class 'float'>","<class 'str'>","<class 'double'>"], answer: 1 },
          { q: "Which keyword is used to define a function in Python?", options: ["func","function","def","define"], answer: 2 },
          { q: "What does `//` do in Python?", options: ["Division","Floor division","Modulus","Exponentiation"], answer: 1 },
          { q: "How do you insert a comment in Python?", options: ["// comment","/* comment */","# comment","-- comment"], answer: 2 },
          { q: "What is the correct file extension for Python files?", options: [".py",".python",".pt",".pyt"], answer: 0 },
        ]
      },
      {
        name: "Data Structures",
        questions: [
          { q: "Which of these is an immutable sequence in Python?", options: ["list","dict","tuple","set"], answer: 2 },
          { q: "What method adds an element to the end of a list?", options: ["add()","insert()","append()","extend()"], answer: 2 },
          { q: "What does `len({'a':1,'b':2})` return?", options: ["1","2","3","Error"], answer: 1 },
          { q: "Which data structure does NOT allow duplicate values?", options: ["list","tuple","dict","set"], answer: 3 },
          { q: "How do you create an empty dictionary?", options: ["{}","[]","()","set()"], answer: 0 },
        ]
      },
      {
        name: "OOP",
        questions: [
          { q: "Which keyword is used to create a class in Python?", options: ["class","Class","object","struct"], answer: 0 },
          { q: "What is the constructor method in Python called?", options: ["__new__","__init__","__create__","__start__"], answer: 1 },
          { q: "What does 'self' refer to in a class method?", options: ["The class itself","The parent class","The current instance","A global variable"], answer: 2 },
          { q: "Which OOP principle hides the internal state of an object?", options: ["Inheritance","Polymorphism","Encapsulation","Abstraction"], answer: 2 },
          { q: "How do you inherit from a parent class in Python?", options: ["class Child(Parent):","class Child extends Parent:","class Child inherits Parent:","child = Parent()"], answer: 0 },
        ]
      },
      {
        name: "Loops & Conditions",
        questions: [
          { q: "What does `range(3)` produce?", options: ["[1,2,3]","[0,1,2]","[0,1,2,3]","[1,2]"], answer: 1 },
          { q: "Which keyword exits a loop immediately?", options: ["exit","stop","break","continue"], answer: 2 },
          { q: "What is the output of: `x=5; print('yes' if x>3 else 'no')`?", options: ["yes","no","True","Error"], answer: 0 },
          { q: "Which loop is guaranteed to run at least once?", options: ["for","while","do-while","Python has no such loop"], answer: 3 },
          { q: "`continue` in a loop does what?", options: ["Exits the loop","Skips current iteration","Restarts the loop","Pauses execution"], answer: 1 },
        ]
      },
      {
        name: "Functions & Modules",
        questions: [
          { q: "What keyword returns a value from a function?", options: ["yield","send","return","output"], answer: 2 },
          { q: "What is a lambda function?", options: ["A named multi-line function","An anonymous single-expression function","A class method","A built-in function"], answer: 1 },
          { q: "How do you import the math module?", options: ["include math","require math","import math","use math"], answer: 2 },
          { q: "What does *args allow in a function?", options: ["Keyword arguments","Variable positional arguments","Default arguments","Private arguments"], answer: 1 },
          { q: "Which module provides mathematical functions like sqrt()?", options: ["maths","math","numbers","calc"], answer: 1 },
        ]
      },
    ]
  },

  // ── 2. C PROGRAMMING ────────────────────────────────────
  {
    id: "c",
    title: "C Programming",
    icon: "⚙️",
    color: "#a8b9cc",
    gradient: "linear-gradient(135deg,#1a1a2e,#a8b9cc)",
    desc: "Pointers, memory, data structures, and system programming",
    topics: [
      {
        name: "Basics & Syntax",
        questions: [
          { q: "Which header file is required for printf()?", options: ["<stdlib.h>","<string.h>","<stdio.h>","<math.h>"], answer: 2 },
          { q: "What is the correct way to declare an integer variable in C?", options: ["integer x;","int x;","var x;","x = int;"], answer: 1 },
          { q: "What does `sizeof(int)` typically return on a 32-bit system?", options: ["1","2","4","8"], answer: 2 },
          { q: "Which operator is used to get the address of a variable?", options: ["*","&","->","%"], answer: 1 },
          { q: "What is the entry point of a C program?", options: ["start()","begin()","main()","init()"], answer: 2 },
        ]
      },
      {
        name: "Pointers",
        questions: [
          { q: "What does `*ptr` do when ptr is a pointer?", options: ["Gets the address","Dereferences the pointer","Declares a pointer","Deletes the pointer"], answer: 1 },
          { q: "What is a NULL pointer?", options: ["A pointer to zero memory","A pointer that points to nothing valid","A pointer to an array","A pointer to a function"], answer: 1 },
          { q: "What does pointer arithmetic `ptr + 1` do?", options: ["Adds 1 byte","Moves to the next element (by type size)","Increments the value","Causes an error"], answer: 1 },
          { q: "Which is the correct way to declare a pointer to int?", options: ["int ptr;","int *ptr;","*int ptr;","pointer int ptr;"], answer: 1 },
          { q: "What is a dangling pointer?", options: ["A pointer that is NULL","A pointer pointing to freed memory","A pointer to a function","A pointer inside a struct"], answer: 1 },
        ]
      },
      {
        name: "Arrays & Strings",
        questions: [
          { q: "How do you declare an array of 5 integers?", options: ["int arr[5];","array int arr(5);","int[5] arr;","arr = int[5];"], answer: 0 },
          { q: "What does `strlen(\"hello\")` return?", options: ["6","5","4","Error"], answer: 1 },
          { q: "Which function copies one string to another?", options: ["strcat","strcmp","strcpy","strstr"], answer: 2 },
          { q: "What is the index of the first element of an array?", options: ["1","0","-1","Depends on declaration"], answer: 1 },
          { q: "How is a string terminated in C?", options: ["With a space","With '\\0'","With a semicolon","With EOF"], answer: 1 },
        ]
      },
      {
        name: "Functions & Recursion",
        questions: [
          { q: "What is a recursive function?", options: ["One that takes no arguments","One that calls itself","One that returns void","One that uses pointers"], answer: 1 },
          { q: "What must every recursive function have?", options: ["A return type","A pointer argument","A base case","Multiple parameters"], answer: 2 },
          { q: "In C, arguments are passed by default as?", options: ["Reference","Pointer","Value","Address"], answer: 2 },
          { q: "What keyword prevents a function from returning a value?", options: ["null","empty","void","none"], answer: 2 },
          { q: "What is a function prototype?", options: ["The function body","A declaration of a function before its definition","A macro","A typedef"], answer: 1 },
        ]
      },
      {
        name: "Memory Management",
        questions: [
          { q: "Which function allocates memory at runtime in C?", options: ["alloc()","new","malloc()","create()"], answer: 2 },
          { q: "What should you always do after using malloc?", options: ["Print the pointer","Cast to int","Call free()","Reassign it to NULL only"], answer: 2 },
          { q: "What is a memory leak?", options: ["Overflowing a buffer","Allocated memory never freed","Using NULL pointer","Stack overflow"], answer: 1 },
          { q: "`calloc` differs from `malloc` in that it:", options: ["Allocates less memory","Initializes memory to zero","Allocates on the stack","Is faster"], answer: 1 },
          { q: "What does `realloc` do?", options: ["Frees memory","Resizes previously allocated memory","Allocates read-only memory","Copies a string"], answer: 1 },
        ]
      },
    ]
  },

  // ── 3. JAVA ──────────────────────────────────────────────
  {
    id: "java",
    title: "Java Programming",
    icon: "☕",
    color: "#f89820",
    gradient: "linear-gradient(135deg,#e76f00,#f89820)",
    desc: "OOP, collections, exceptions, and Java fundamentals",
    topics: [
      {
        name: "OOP Concepts",
        questions: [
          { q: "Which keyword is used to create an object in Java?", options: ["create","new","object","make"], answer: 1 },
          { q: "What is method overloading?", options: ["Same method name, different parameters","Two classes with same method","Overriding a parent method","Using an interface"], answer: 0 },
          { q: "Which keyword enables inheritance?", options: ["inherits","implements","extends","uses"], answer: 2 },
          { q: "What is an abstract class?", options: ["A class with no methods","A class that cannot be instantiated","A class with only static methods","A final class"], answer: 1 },
          { q: "What does `super` refer to?", options: ["The current class","The parent class","A static variable","A constructor"], answer: 1 },
        ]
      },
      {
        name: "Data Types & Variables",
        questions: [
          { q: "What is the default value of an int in Java?", options: ["null","undefined","0","-1"], answer: 2 },
          { q: "Which is NOT a primitive type in Java?", options: ["int","boolean","String","double"], answer: 2 },
          { q: "What keyword makes a variable constant?", options: ["static","final","const","immutable"], answer: 1 },
          { q: "What is autoboxing?", options: ["Auto array creation","Wrapping primitives into objects","Unboxing objects","Type casting"], answer: 1 },
          { q: "How large is a `long` in Java?", options: ["16 bits","32 bits","64 bits","128 bits"], answer: 2 },
        ]
      },
      {
        name: "Exception Handling",
        questions: [
          { q: "Which keyword catches exceptions in Java?", options: ["handle","catch","except","error"], answer: 1 },
          { q: "What class is the superclass of all exceptions?", options: ["Error","RuntimeException","Throwable","Exception"], answer: 2 },
          { q: "A `finally` block executes:", options: ["Only when an exception occurs","Only when no exception occurs","Always, whether or not exception occurs","Never for checked exceptions"], answer: 2 },
          { q: "What is a checked exception?", options: ["Caught at runtime","Must be handled at compile time","A subclass of Error","An unchecked exception"], answer: 1 },
          { q: "Which keyword is used to throw an exception manually?", options: ["raise","throw","throws","error"], answer: 1 },
        ]
      },
      {
        name: "Collections",
        questions: [
          { q: "Which collection maintains insertion order and allows duplicates?", options: ["Set","HashMap","ArrayList","TreeMap"], answer: 2 },
          { q: "What does a HashMap store?", options: ["Only keys","Only values","Key-value pairs","A sorted list"], answer: 2 },
          { q: "Which interface does ArrayList implement?", options: ["Map","Set","Queue","List"], answer: 3 },
          { q: "How do you iterate over a collection using a for-each loop variable `item` in `list`?", options: ["for item in list","for(item : list)","for(var item : list)","for(Object item : list)"], answer: 3 },
          { q: "What is the difference between LinkedList and ArrayList?", options: ["ArrayList is faster for insertion at the middle","LinkedList uses contiguous memory","LinkedList is faster for insertion/deletion","ArrayList uses nodes"], answer: 2 },
        ]
      },
      {
        name: "Interfaces & Generics",
        questions: [
          { q: "What keyword is used to implement an interface?", options: ["extends","implements","uses","interface"], answer: 1 },
          { q: "Can an interface have method implementations in Java 8+?", options: ["No, never","Yes, using default methods","Only with abstract methods","Only in final classes"], answer: 1 },
          { q: "What is the purpose of Generics in Java?", options: ["To increase speed","To allow type-safe data structures","To create abstract classes","To define constants"], answer: 1 },
          { q: "Which of these declares a generic class?", options: ["class Box<T>","class Box[T]","class Box{T}","class Box:T"], answer: 0 },
          { q: "An interface in Java can extend:", options: ["Only one interface","Multiple interfaces","A class","Nothing"], answer: 1 },
        ]
      },
    ]
  },

  // ── 4. DATA ENGINEERING (DE) ────────────────────────────
  {
    id: "de",
    title: "Data Engineering",
    icon: "🔧",
    color: "#00b4d8",
    gradient: "linear-gradient(135deg,#0077b6,#00b4d8)",
    desc: "Pipelines, ETL, big data tools, and data infrastructure",
    topics: [
      {
        name: "ETL & Pipelines",
        questions: [
          { q: "What does ETL stand for?", options: ["Extract, Transform, Load","Export, Transfer, Link","Evaluate, Test, Launch","Extract, Test, Load"], answer: 0 },
          { q: "Which step in ETL cleans and restructures data?", options: ["Extract","Load","Transform","Index"], answer: 2 },
          { q: "What is a data pipeline?", options: ["A network cable","A series of data processing steps","A database schema","A SQL query"], answer: 1 },
          { q: "Apache Airflow is primarily used for:", options: ["Stream processing","Workflow orchestration","Data storage","Visualization"], answer: 1 },
          { q: "What does ELT differ from ETL in?", options: ["Transform happens before loading","Load happens before transformation","Extract is skipped","There is no difference"], answer: 1 },
        ]
      },
      {
        name: "Big Data Tools",
        questions: [
          { q: "What is Apache Hadoop primarily used for?", options: ["Real-time streaming","Distributed storage and processing","Data visualization","Machine learning only"], answer: 1 },
          { q: "What is Apache Spark known for?", options: ["Batch-only processing","Slower than Hadoop","In-memory fast processing","A storage system"], answer: 2 },
          { q: "What is HDFS?", options: ["A SQL database","Hadoop Distributed File System","A streaming protocol","A BI tool"], answer: 1 },
          { q: "Kafka is best described as:", options: ["A SQL engine","A distributed messaging system","A file system","A batch processor"], answer: 1 },
          { q: "What does MapReduce do?", options: ["Visualizes data","Maps database schemas","Processes large datasets in parallel across nodes","Stores data in tables"], answer: 2 },
        ]
      },
      {
        name: "Data Warehousing",
        questions: [
          { q: "What is a data warehouse?", options: ["A physical storage room","A central repository for structured analytical data","A NoSQL database","A streaming service"], answer: 1 },
          { q: "What is a star schema?", options: ["A type of index","A warehouse design with a central fact table and dimension tables","A network topology","A partitioning method"], answer: 1 },
          { q: "What is OLAP?", options: ["Online Transaction Processing","Online Analytical Processing","Offline Load and Process","Object Layer API"], answer: 1 },
          { q: "Snowflake (the platform) is a:", options: ["NoSQL database","Hadoop tool","Cloud data warehouse","ETL framework"], answer: 2 },
          { q: "What is data partitioning?", options: ["Deleting old data","Splitting data into logical segments for faster access","Joining tables","Normalizing a database"], answer: 1 },
        ]
      },
      {
        name: "Data Formats & Storage",
        questions: [
          { q: "Which format is columnar and widely used in big data?", options: ["CSV","JSON","Parquet","XML"], answer: 2 },
          { q: "What is a data lake?", options: ["A normalized relational DB","A raw data storage repository at any scale","An OLAP system","A Hadoop cluster"], answer: 1 },
          { q: "Avro is a data format that supports:", options: ["Only JSON","Schema evolution and serialization","Only SQL","Column-based storage"], answer: 1 },
          { q: "What is the main advantage of columnar storage?", options: ["Faster row inserts","Better compression and faster analytical reads","More indexes","Supports transactions"], answer: 1 },
          { q: "What does CDC stand for in data engineering?", options: ["Central Data Cache","Change Data Capture","Column Data Compression","Columnar Data Catalog"], answer: 1 },
        ]
      },
    ]
  },

  // ── 5. POLITICAL ECONOMY ────────────────────────────────
  {
    id: "poleco",
    title: "Political Economy",
    icon: "🏛️",
    color: "#6c757d",
    gradient: "linear-gradient(135deg,#343a40,#6c757d)",
    desc: "Economics, political systems, global trade, and policy",
    topics: [
      {
        name: "Economic Systems",
        questions: [
          { q: "What type of economy is controlled entirely by the government?", options: ["Market economy","Mixed economy","Command economy","Traditional economy"], answer: 2 },
          { q: "In a free market economy, prices are determined by:", options: ["The government","Corporations","Supply and demand","The central bank"], answer: 2 },
          { q: "What is GDP?", options: ["Government Debt Policy","Gross Domestic Product","Global Development Plan","General Dividend Payment"], answer: 1 },
          { q: "Capitalism is characterized by:", options: ["State ownership of production","Private ownership and free market","Equal distribution of wealth","Central planning"], answer: 1 },
          { q: "What is inflation?", options: ["Decrease in GDP","Increase in general price levels","Fall in unemployment","Rise in exports"], answer: 1 },
        ]
      },
      {
        name: "Political Systems",
        questions: [
          { q: "What is a democracy?", options: ["Rule by a single person","Rule by the military","Rule by the people","Rule by corporations"], answer: 2 },
          { q: "What is authoritarianism?", options: ["Freedom of speech","Limited political freedoms under a single authority","Multi-party system","A form of democracy"], answer: 1 },
          { q: "What is the role of the state in political economy?", options: ["Only to collect taxes","To regulate, redistribute, and provide public goods","Only to protect borders","To own all businesses"], answer: 1 },
          { q: "What is federalism?", options: ["Rule by one government","Division of power between central and regional governments","Single-party rule","A foreign policy doctrine"], answer: 1 },
          { q: "What does 'separation of powers' mean?", options: ["Military control of politics","Division of government into executive, legislative, judicial branches","A country with no government","A tax policy"], answer: 1 },
        ]
      },
      {
        name: "Trade & Globalization",
        questions: [
          { q: "What is comparative advantage?", options: ["Producing more of everything","Specializing in goods with lower opportunity cost","Trading at equal rates","Importing everything"], answer: 1 },
          { q: "What is a trade deficit?", options: ["Imports exceed exports","Exports exceed imports","Equal trade between countries","A tax on imports"], answer: 0 },
          { q: "What does the WTO do?", options: ["Manages global currencies","Regulates international trade","Controls immigration","Manages military alliances"], answer: 1 },
          { q: "What is globalization?", options: ["Isolation of countries","Increased interconnectedness of economies and cultures worldwide","Only economic integration","A political ideology"], answer: 1 },
          { q: "A tariff is:", options: ["A trade agreement","A tax on imported goods","A subsidy for exports","A currency policy"], answer: 1 },
        ]
      },
      {
        name: "Development Economics",
        questions: [
          { q: "What does HDI measure?", options: ["Only income","Human Development Index: life expectancy, education, and income","Military strength","Trade balance"], answer: 1 },
          { q: "What is structural adjustment?", options: ["Building infrastructure","Policy reforms imposed on countries receiving IMF/World Bank loans","Changing a constitution","A tax reform"], answer: 1 },
          { q: "What is the dependency theory?", options: ["Developed nations depend on developing nations","Developing nations are kept underdeveloped by their relationships with wealthy nations","Economic growth depends on exports","Technology dependence"], answer: 1 },
          { q: "The World Bank primarily:", options: ["Controls currency exchange","Provides loans and grants for development","Regulates global trade","Manages military aid"], answer: 1 },
          { q: "What is foreign direct investment (FDI)?", options: ["Domestic savings","Investment by a company in a foreign country","Currency exchange","Government debt"], answer: 1 },
        ]
      },
    ]
  },

  // ── 6. COMPUTER NETWORKS ────────────────────────────────
  {
    id: "networks",
    title: "Computer Networks",
    icon: "🌐",
    color: "#2ecc71",
    gradient: "linear-gradient(135deg,#1a7a4a,#2ecc71)",
    desc: "TCP/IP, OSI model, protocols, and network security",
    topics: [
      {
        name: "OSI Model",
        questions: [
          { q: "How many layers are in the OSI model?", options: ["5","6","7","8"], answer: 2 },
          { q: "Which OSI layer is responsible for routing?", options: ["Data Link","Network","Transport","Session"], answer: 1 },
          { q: "What does the Transport layer provide?", options: ["Physical transmission","Routing","End-to-end communication and error checking","Session management"], answer: 2 },
          { q: "Which layer converts data to bits for transmission?", options: ["Network","Data Link","Physical","Application"], answer: 2 },
          { q: "HTTP operates at which OSI layer?", options: ["Transport","Session","Network","Application"], answer: 3 },
        ]
      },
      {
        name: "TCP/IP & Protocols",
        questions: [
          { q: "What does TCP stand for?", options: ["Transfer Control Protocol","Transmission Control Protocol","Text Control Procedure","Terminal Connection Protocol"], answer: 1 },
          { q: "What is the main difference between TCP and UDP?", options: ["TCP is faster","UDP is connection-oriented","TCP is reliable, UDP is not","UDP uses IP addresses"], answer: 2 },
          { q: "What does DNS do?", options: ["Assigns IP addresses","Translates domain names to IP addresses","Encrypts network traffic","Routes packets"], answer: 1 },
          { q: "What is the purpose of ARP?", options: ["Assigns domain names","Maps IP addresses to MAC addresses","Routes packets across the internet","Encrypts data"], answer: 1 },
          { q: "Which protocol is used to send emails?", options: ["FTP","HTTP","SMTP","POP3"], answer: 2 },
        ]
      },
      {
        name: "IP Addressing",
        questions: [
          { q: "How many bits are in an IPv4 address?", options: ["16","32","64","128"], answer: 1 },
          { q: "What is a subnet mask used for?", options: ["Encrypt traffic","Divide IP addresses into network and host portions","Assign MAC addresses","Route between VLANs"], answer: 1 },
          { q: "What class is the IP address 192.168.1.1?", options: ["Class A","Class B","Class C","Class D"], answer: 2 },
          { q: "What does NAT do?", options: ["Translates MAC to IP","Translates private IPs to public IPs","Assigns domain names","Encrypts packets"], answer: 1 },
          { q: "IPv6 addresses are how many bits?", options: ["32","64","128","256"], answer: 2 },
        ]
      },
      {
        name: "Network Security",
        questions: [
          { q: "What is a firewall?", options: ["A physical cable","A system that monitors/controls incoming and outgoing network traffic","A DNS server","A routing protocol"], answer: 1 },
          { q: "What does HTTPS use to secure communication?", options: ["FTP","SSL/TLS","ARP","SNMP"], answer: 1 },
          { q: "What is a DoS attack?", options: ["Data on Servers attack","Denial of Service — overwhelming a server","Domain over Subnet","Data over System"], answer: 1 },
          { q: "What is a VPN?", options: ["Virtual Private Network — encrypts traffic over internet","Very Powerful Network","Verified Public Node","Visual Protocol Network"], answer: 0 },
          { q: "What is a man-in-the-middle attack?", options: ["Cracking a password","Intercepting communication between two parties","Flooding a server","Planting malware"], answer: 1 },
        ]
      },
    ]
  },

  // ── 7. SCIENTIFIC THINKING ──────────────────────────────
  {
    id: "scithink",
    title: "Scientific Thinking",
    icon: "🔬",
    color: "#9b59b6",
    gradient: "linear-gradient(135deg,#6c3483,#9b59b6)",
    desc: "Research methods, logic, critical thinking, and epistemology",
    topics: [
      {
        name: "Scientific Method",
        questions: [
          { q: "What is the first step of the scientific method?", options: ["Experiment","Conclusion","Observation / Question","Hypothesis"], answer: 2 },
          { q: "A hypothesis must be:", options: ["Proven true","Testable and falsifiable","Always correct","Based on intuition only"], answer: 1 },
          { q: "What is a controlled experiment?", options: ["One with no variables","An experiment with all variables changed","An experiment where only one variable is changed","An experiment repeated 100 times"], answer: 2 },
          { q: "What is peer review?", options: ["A student reviewing homework","Evaluation of research by experts in the same field","Reviewing social media posts","A government review process"], answer: 1 },
          { q: "What does 'replication' mean in science?", options: ["Copying data","Repeating an experiment to verify results","Publishing twice","Rejecting a hypothesis"], answer: 1 },
        ]
      },
      {
        name: "Research Methods",
        questions: [
          { q: "What is qualitative research?", options: ["Research using numerical data","Research dealing with non-numerical data and meaning","A statistical test","A lab experiment"], answer: 1 },
          { q: "What is a sample in research?", options: ["A complete population","A subset of the population studied","A type of experiment","A research hypothesis"], answer: 1 },
          { q: "What is a control group in an experiment?", options: ["The group receiving treatment","The group NOT receiving the treatment (baseline)","The largest group","The group with the best results"], answer: 1 },
          { q: "What is a literature review?", options: ["Reading novels","A survey of existing research on a topic","An experiment","A statistical analysis"], answer: 1 },
          { q: "What does 'bias' in research mean?", options: ["A large sample size","Systematic error favoring a certain result","An accurate conclusion","Using many variables"], answer: 1 },
        ]
      },
      {
        name: "Logic & Critical Thinking",
        questions: [
          { q: "What is deductive reasoning?", options: ["Drawing specific conclusions from general principles","Drawing general conclusions from specific observations","Guessing without evidence","Testing a hypothesis"], answer: 0 },
          { q: "What is inductive reasoning?", options: ["Drawing general conclusions from specific observations","Applying a general rule to a specific case","A type of experiment","Using only statistics"], answer: 0 },
          { q: "What is a logical fallacy?", options: ["A valid argument","A flaw in reasoning that makes an argument invalid","A correct conclusion","A scientific theorem"], answer: 1 },
          { q: "What does 'correlation does not imply causation' mean?", options: ["Two events happening together proves one caused the other","Two events being related does not mean one caused the other","All correlations are false","Statistics are always wrong"], answer: 1 },
          { q: "What is critical thinking?", options: ["Criticizing others","Objective analysis and evaluation of information","Memorizing facts","Following instructions"], answer: 1 },
        ]
      },
      {
        name: "Data & Statistics Basics",
        questions: [
          { q: "What is the mean of a dataset?", options: ["The most frequent value","The middle value","The sum divided by the number of values","The highest value"], answer: 2 },
          { q: "What does standard deviation measure?", options: ["The average","The spread/variability of data","The highest value","Sample size"], answer: 1 },
          { q: "What is a p-value?", options: ["The sample mean","The probability that results occurred by chance","The size of the effect","A type of variable"], answer: 1 },
          { q: "What is a null hypothesis?", options: ["The hypothesis being tested (assumes no effect)","The expected result","A proven fact","An alternative explanation"], answer: 0 },
          { q: "What type of chart best shows proportion of a whole?", options: ["Bar chart","Line graph","Pie chart","Scatter plot"], answer: 2 },
        ]
      },
    ]
  },

  // ── 8. DATABASE PROGRAMMING ──────────────────────────────
  {
    id: "dbprog",
    title: "Database Programming",
    icon: "🗄️",
    color: "#e74c3c",
    gradient: "linear-gradient(135deg,#c0392b,#e74c3c)",
    desc: "SQL, normalization, transactions, NoSQL, and database design",
    topics: [
      {
        name: "SQL Basics",
        questions: [
          { q: "What does SQL stand for?", options: ["Structured Query Language","Simple Query Language","Standard Question Logic","System Queue Language"], answer: 0 },
          { q: "Which SQL statement retrieves data from a table?", options: ["INSERT","UPDATE","SELECT","DELETE"], answer: 2 },
          { q: "How do you filter rows in SQL?", options: ["FILTER BY","HAVING","WHERE","GROUP BY"], answer: 2 },
          { q: "What does `SELECT DISTINCT` do?", options: ["Selects all rows","Selects unique rows","Selects random rows","Selects NULL rows"], answer: 1 },
          { q: "Which clause orders query results?", options: ["SORT BY","ARRANGE BY","ORDER BY","GROUP BY"], answer: 2 },
        ]
      },
      {
        name: "Joins & Aggregates",
        questions: [
          { q: "What is an INNER JOIN?", options: ["Returns all rows from both tables","Returns only matching rows from both tables","Returns all from left table","Returns NULL rows"], answer: 1 },
          { q: "What does COUNT(*) do?", options: ["Counts NULL values only","Counts all rows in a result","Counts distinct rows","Counts columns"], answer: 1 },
          { q: "What is the purpose of GROUP BY?", options: ["Sorts data","Groups rows sharing a column value for aggregation","Filters data","Joins tables"], answer: 1 },
          { q: "What does HAVING do?", options: ["Filters rows before grouping","Filters groups after GROUP BY","Sorts the result","Joins two tables"], answer: 1 },
          { q: "What does a LEFT JOIN return?", options: ["Only matching rows","All rows from the right table and matching from left","All rows from the left table and matching from right","Only NULL rows"], answer: 2 },
        ]
      },
      {
        name: "Normalization",
        questions: [
          { q: "What is normalization in databases?", options: ["Increasing table size","Organizing data to reduce redundancy","Adding more columns","A backup process"], answer: 1 },
          { q: "What does 1NF require?", options: ["No partial dependencies","Atomic values and no repeating groups","No transitive dependencies","A single primary key"], answer: 1 },
          { q: "What does 2NF eliminate?", options: ["Transitive dependencies","Repeating groups","Partial dependencies on the primary key","NULL values"], answer: 2 },
          { q: "What does 3NF eliminate?", options: ["Partial dependencies","Transitive dependencies","Multivalued dependencies","Repeating groups"], answer: 1 },
          { q: "What is a primary key?", options: ["Any column in a table","A unique identifier for each row","A foreign table reference","An index"], answer: 1 },
        ]
      },
      {
        name: "Transactions & Integrity",
        questions: [
          { q: "What does ACID stand for?", options: ["Atomic, Consistent, Isolated, Durable","Accurate, Complete, Indexed, Distinct","Automatic, Cached, Indexed, Dynamic","Active, Controlled, Independent, Data"], answer: 0 },
          { q: "What is atomicity in transactions?", options: ["All or nothing — transaction fully completes or fully rolls back","Data is accurate","Transactions run in isolation","Data persists after transaction"], answer: 0 },
          { q: "What is a deadlock in databases?", options: ["A crashed server","Two transactions waiting for each other to release locks","A slow query","An overloaded index"], answer: 1 },
          { q: "What is a foreign key?", options: ["A key from another database","A column referencing the primary key of another table","An encrypted key","A composite key"], answer: 1 },
          { q: "What does ROLLBACK do?", options: ["Saves changes permanently","Undoes changes made in a transaction","Deletes a table","Creates an index"], answer: 1 },
        ]
      },
      {
        name: "NoSQL & Modern DBs",
        questions: [
          { q: "What type of database is MongoDB?", options: ["Relational","Key-value store","Document-oriented NoSQL","Graph database"], answer: 2 },
          { q: "What does NoSQL stand for?", options: ["No Structured Query Language","Not Only SQL","Non-Standard Query Language","No Server Query Language"], answer: 1 },
          { q: "Which NoSQL database uses key-value pairs?", options: ["MongoDB","Cassandra","Redis","Neo4j"], answer: 2 },
          { q: "What is a graph database best used for?", options: ["Flat file storage","Storing relationships between entities","Large binary files","Relational data"], answer: 1 },
          { q: "What is horizontal scaling?", options: ["Adding more RAM to one server","Adding more servers to distribute load","Improving CPU speed","Increasing disk size"], answer: 1 },
        ]
      },
    ]
  },

  // ── 9. OPERATING SYSTEMS ────────────────────────────────
  {
    id: "os",
    title: "Operating Systems",
    icon: "💻",
    color: "#1abc9c",
    gradient: "linear-gradient(135deg,#0e6655,#1abc9c)",
    desc: "Processes, memory, file systems, scheduling, and concurrency",
    topics: [
      {
        name: "Processes & Threads",
        questions: [
          { q: "What is a process?", options: ["A file on disk","A program in execution","A hardware component","A network packet"], answer: 1 },
          { q: "What is the difference between a process and a thread?", options: ["Threads have their own memory space","Processes share memory; threads have separate memory","Threads are lighter and share the process's memory space","Processes are faster than threads"], answer: 2 },
          { q: "What is a context switch?", options: ["Switching between users","Saving and loading process state to switch between processes","Changing file permissions","Switching network connections"], answer: 1 },
          { q: "What is a zombie process?", options: ["A virus","A process that has finished but still has an entry in the process table","A sleeping process","A background daemon"], answer: 1 },
          { q: "Inter-process communication (IPC) methods include:", options: ["Threads only","Pipes, sockets, shared memory, message queues","Direct memory allocation","System calls only"], answer: 1 },
        ]
      },
      {
        name: "CPU Scheduling",
        questions: [
          { q: "What is the goal of CPU scheduling?", options: ["Maximize idle time","Maximize CPU utilization and minimize wait time","Minimize CPU usage","Maximize memory usage"], answer: 1 },
          { q: "What is FCFS scheduling?", options: ["Fastest CPU First Served","First Come First Served — processes in arrival order","Fixed CPU First Served","Frequency-based scheduling"], answer: 1 },
          { q: "What is Round Robin scheduling?", options: ["Executing longest job first","Each process gets a fixed time slice in rotation","Priority-based scheduling","Non-preemptive scheduling"], answer: 1 },
          { q: "What is a priority scheduling disadvantage?", options: ["Too simple","Starvation of low-priority processes","No context switching","Requires large memory"], answer: 1 },
          { q: "What does preemptive scheduling mean?", options: ["The OS can never interrupt a process","The OS can interrupt a running process to give CPU to another","Processes decide when to yield","A type of disk scheduling"], answer: 1 },
        ]
      },
      {
        name: "Memory Management",
        questions: [
          { q: "What is virtual memory?", options: ["Extra RAM","Disk space used as an extension of RAM","A cache mechanism","A type of register"], answer: 1 },
          { q: "What is paging in OS?", options: ["Sending messages","Dividing memory into fixed-size blocks (pages)","A CPU scheduling method","A file access method"], answer: 1 },
          { q: "What is a page fault?", options: ["An error in a program","When a page needed is not in RAM and must be loaded from disk","A hardware failure","A network error"], answer: 1 },
          { q: "What is segmentation?", options: ["Dividing memory into equal pages","Dividing memory into variable-size logical segments","A CPU scheduling method","A file system method"], answer: 1 },
          { q: "What is thrashing?", options: ["A CPU error","Constant page swapping causing minimal useful work","A network attack","A disk formatting method"], answer: 1 },
        ]
      },
      {
        name: "File Systems",
        questions: [
          { q: "What is a file system?", options: ["A list of running processes","A method for organizing and storing files on storage","A CPU scheduling algorithm","A network protocol"], answer: 1 },
          { q: "What does FAT stand for?", options: ["File Allocation Table","Fast Access Technique","File Access Terminal","Fixed Allocation Type"], answer: 0 },
          { q: "What is an inode in Linux?", options: ["A type of network node","A data structure storing metadata about a file","A file name","A directory"], answer: 1 },
          { q: "What is a hard link?", options: ["A shortcut to a file","A direct reference to file data (same inode)","A symbolic link","An encrypted file"], answer: 1 },
          { q: "What does NTFS stand for?", options: ["New Technology File System","Network Transfer File System","Node Table File Structure","Normal Text File System"], answer: 0 },
        ]
      },
      {
        name: "Synchronization & Deadlocks",
        questions: [
          { q: "What is a race condition?", options: ["A CPU benchmark","When two processes access shared data concurrently leading to inconsistent results","A scheduling algorithm","A memory overflow"], answer: 1 },
          { q: "What is a mutex?", options: ["A type of process","A mutual exclusion lock preventing concurrent access","A scheduling queue","A memory segment"], answer: 1 },
          { q: "What is a semaphore?", options: ["A network signal","A signaling mechanism controlling access to shared resources","A CPU register","A file type"], answer: 1 },
          { q: "Deadlock requires all four conditions EXCEPT:", options: ["Mutual exclusion","Hold and wait","Preemption (non-preemption is required)","Circular wait"], answer: 2 },
          { q: "What is the Banker's algorithm used for?", options: ["Financial calculations","Deadlock avoidance by checking safe states","CPU scheduling","Memory paging"], answer: 1 },
        ]
      },
    ]
  },

  // ── 10. SYSTEMS ANALYSIS & DESIGN ───────────────────────
  {
    id: "sad",
    title: "Systems Analysis & Design",
    icon: "📐",
    color: "#e67e22",
    gradient: "linear-gradient(135deg,#d35400,#e67e22)",
    desc: "SDLC, UML, requirements, design patterns, and project management",
    topics: [
      {
        name: "SDLC",
        questions: [
          { q: "What does SDLC stand for?", options: ["Software Data Life Cycle","System Development Life Cycle","Software Design Logic Component","System Design and Launch Cycle"], answer: 1 },
          { q: "What are the typical phases of SDLC?", options: ["Plan, Code, Deploy","Planning, Analysis, Design, Implementation, Testing, Maintenance","Design, Build, Test","Gather, Code, Test"], answer: 1 },
          { q: "What is the Waterfall model?", options: ["An agile approach","A sequential SDLC model where each phase must complete before the next begins","An iterative model","A rapid prototyping method"], answer: 1 },
          { q: "What is Agile development?", options: ["A sequential development process","Iterative, flexible development focused on collaboration and adaptation","A design pattern","A type of database model"], answer: 1 },
          { q: "What is a sprint in Scrum?", options: ["A daily meeting","A fixed time-box iteration (usually 1-4 weeks) for delivering a product increment","A design document","A testing phase"], answer: 1 },
        ]
      },
      {
        name: "Requirements Engineering",
        questions: [
          { q: "What is a functional requirement?", options: ["A constraint on performance","A specific behavior or function the system must perform","A hardware requirement","A security policy"], answer: 1 },
          { q: "What is a non-functional requirement?", options: ["A required feature","Quality attributes like performance, security, scalability","A user story","A system function"], answer: 1 },
          { q: "What is a use case?", options: ["A test script","A description of how a user interacts with the system to achieve a goal","A class diagram","A database table"], answer: 1 },
          { q: "What is feasibility analysis?", options: ["Coding the system","Determining if a project is technically, financially, and operationally viable","Testing the system","Designing the UI"], answer: 1 },
          { q: "What does DFD stand for?", options: ["Data Flow Diagram","Design Function Document","Database Feature Definition","Dynamic Field Descriptor"], answer: 0 },
        ]
      },
      {
        name: "UML Diagrams",
        questions: [
          { q: "What does UML stand for?", options: ["Unified Modeling Language","Universal Machine Logic","User Module Library","Uniform Method Language"], answer: 0 },
          { q: "Which UML diagram shows static class structure?", options: ["Sequence diagram","Activity diagram","Class diagram","State diagram"], answer: 2 },
          { q: "What does a use case diagram show?", options: ["Data flow","Class relationships","Interactions between actors and the system","Object states"], answer: 2 },
          { q: "What is a sequence diagram used for?", options: ["Showing class relationships","Showing the order of interactions between objects over time","Showing system deployment","Modeling database schemas"], answer: 1 },
          { q: "What does ERD stand for?", options: ["Entity Relationship Diagram","Event Response Design","Execution Runtime Diagram","Element Resource Database"], answer: 0 },
        ]
      },
      {
        name: "Design Principles & Patterns",
        questions: [
          { q: "What is the Singleton design pattern?", options: ["Creates multiple instances","Ensures only one instance of a class exists","A sorting algorithm","A network protocol"], answer: 1 },
          { q: "What does MVC stand for?", options: ["Model View Controller","Multiple View Components","Main Variable Class","Module Version Control"], answer: 0 },
          { q: "What is cohesion in software design?", options: ["How tightly coupled modules are","How well elements within a module relate to each other","A security measure","A data structure"], answer: 1 },
          { q: "What is coupling in software design?", options: ["How well a module does one thing","The degree of interdependence between modules","An OOP principle","A design pattern"], answer: 1 },
          { q: "What does DRY stand for?", options: ["Data Repository Yield","Don't Repeat Yourself — avoid code duplication","Dynamic Resource Yield","Design Reuse Yourself"], answer: 1 },
        ]
      },
    ]
  },
];
