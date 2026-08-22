<<<<<<< HEAD
export interface Topic {
  id: string;
  title: string;
  keywords: string[];
  status: 'covered' | 'partially-covered' | 'missing';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  summary?: string;
  lastAnalyzed?: string;
=======
/**
 * DEMO DATA for the Syllora prototype.
 *
 * IMPORTANT: none of the syllabus content below is official university
 * material. It is clearly labelled DEMO SYLLABUS DATA everywhere it is shown
 * in the UI, and is structured so that real, official curriculum data can be
 * dropped in later without changing any component.
 */

export type TopicStatus = "covered" | "partial" | "missing";

export interface Topic {
  id: string;
  name: string;
>>>>>>> 34e7f9f8cf1629ba9848c49838794d40b2ab8410
}

export interface Unit {
  id: string;
<<<<<<< HEAD
  unitNumber: number;
  title: string;
=======
  number: number;
  title: string;
  summary: string;
>>>>>>> 34e7f9f8cf1629ba9848c49838794d40b2ab8410
  topics: Topic[];
}

export interface Subject {
  id: string;
<<<<<<< HEAD
  code: string;
  name: string;
  description: string;
  semester: number;
  credits: number;
  units: Unit[];
}

export interface UniversityOption {
  id: string;
  name: string;
  location: string;
}

export interface DegreeOption {
  id: string;
  name: string;
}

export interface BranchOption {
  id: string;
  name: string;
}

export const UNIVERSITIES: UniversityOption[] = [
  { id: 'stanford', name: 'Stanford University', location: 'California, USA' },
  { id: 'mit', name: 'Massachusetts Institute of Technology (MIT)', location: 'Massachusetts, USA' },
  { id: 'anna-univ', name: 'Anna University', location: 'Chennai, India' },
  { id: 'vtu', name: 'Visvesvaraya Technological University (VTU)', location: 'Karnataka, India' },
  { id: 'dtu', name: 'Delhi Technological University (DTU)', location: 'Delhi, India' }
];

export const DEGREES: DegreeOption[] = [
  { id: 'btech', name: 'B.Tech / B.S. (Bachelor of Technology / Science)' },
  { id: 'be', name: 'B.E. (Bachelor of Engineering)' },
  { id: 'mtech', name: 'M.Tech / M.S. (Master of Technology / Science)' }
];

export const BRANCHES: BranchOption[] = [
  { id: 'cse', name: 'Computer Science & Engineering' },
  { id: 'aids', name: 'Artificial Intelligence & Data Science' },
  { id: 'ece', name: 'Electronics & Communication Engineering' },
  { id: 'it', name: 'Information Technology' }
];

export const YEARS = [
  { id: '1', label: '1st Year (Freshman / Sem 1-2)' },
  { id: '2', label: '2nd Year (Sophomore / Sem 3-4)' },
  { id: '3', label: '3rd Year (Junior / Sem 5-6)' },
  { id: '4', label: '4th Year (Senior / Sem 7-8)' }
];

export const INITIAL_SUBJECTS: Subject[] = [
  {
    id: 'dsa',
    code: 'CS301',
    name: 'Data Structures & Algorithms',
    description: 'Fundamental linear and non-linear data structures, algorithm design techniques, and complexity analysis.',
    semester: 3,
    credits: 4,
    units: [
      {
        id: 'dsa-u1',
        unitNumber: 1,
        title: 'Linear Data Structures',
        topics: [
          { id: 'dsa-1', title: 'Arrays & Dynamic Arrays', keywords: ['array', 'vector', 'dynamic array', 'bounds', 'pointer'], status: 'covered', difficulty: 'Easy', summary: 'Understood contiguous memory allocation and dynamic resizing.' },
          { id: 'dsa-2', title: 'Singly & Doubly Linked Lists', keywords: ['linked list', 'node', 'pointer', 'head', 'tail', 'singly', 'doubly'], status: 'covered', difficulty: 'Easy', summary: 'Node insertions, deletions and pointer updates mastered.' },
          { id: 'dsa-3', title: 'Stacks & Queues Applications', keywords: ['stack', 'queue', 'lifo', 'fifo', 'infix', 'postfix', 'dequeue'], status: 'partially-covered', difficulty: 'Medium', summary: 'Need practice with double ended queues and infix to postfix conversions.' }
        ]
      },
      {
        id: 'dsa-u2',
        unitNumber: 2,
        title: 'Trees & Search Trees',
        topics: [
          { id: 'dsa-4', title: 'Binary Trees & Traversals', keywords: ['binary tree', 'inorder', 'preorder', 'postorder', 'traversal'], status: 'covered', difficulty: 'Easy', summary: 'Recursive and iterative tree traversals completed.' },
          { id: 'dsa-5', title: 'Binary Search Trees (BST)', keywords: ['bst', 'binary search tree', 'insert', 'search', 'delete'], status: 'partially-covered', difficulty: 'Medium', summary: 'BST deletion edge cases need review.' },
          { id: 'dsa-6', title: 'Balanced Trees (AVL & Red-Black Trees)', keywords: ['avl', 'red black tree', 'rotation', 'balance factor', 'rebalance'], status: 'missing', difficulty: 'Hard', summary: 'Not studied tree rotations and height balance rules yet.' }
        ]
      },
      {
        id: 'dsa-u3',
        unitNumber: 3,
        title: 'Graphs & Hashing',
        topics: [
          { id: 'dsa-7', title: 'Graph Representations & BFS/DFS', keywords: ['graph', 'adjacency matrix', 'adjacency list', 'bfs', 'dfs', 'breadth first', 'depth first'], status: 'covered', difficulty: 'Medium', summary: 'BFS queue and DFS recursion traversals implemented.' },
          { id: 'dsa-8', title: 'Shortest Path Algorithms (Dijkstra, Bellman-Ford)', keywords: ['dijkstra', 'bellman ford', 'shortest path', 'weighted graph', 'priority queue'], status: 'partially-covered', difficulty: 'Hard', summary: 'Understood Dijkstra algorithm; Bellman-Ford negative edge handling pending.' },
          { id: 'dsa-9', title: 'Hash Tables & Collision Resolution', keywords: ['hash table', 'hashing', 'hash function', 'chaining', 'open addressing', 'linear probing'], status: 'missing', difficulty: 'Medium', summary: 'Chaining vs open addressing concepts not yet covered in study notes.' }
        ]
      },
      {
        id: 'dsa-u4',
        unitNumber: 4,
        title: 'Algorithm Design Techniques',
        topics: [
          { id: 'dsa-10', title: 'Divide & Conquer (Merge Sort, Quick Sort)', keywords: ['divide and conquer', 'merge sort', 'quick sort', 'recurrence', 'partition'], status: 'covered', difficulty: 'Medium', summary: 'Mastered quicksort partition and merge sort space-time complexities.' },
          { id: 'dsa-11', title: 'Dynamic Programming & Memoization', keywords: ['dynamic programming', 'dp', 'memoization', 'tabulation', 'subproblem', 'knapsack'], status: 'missing', difficulty: 'Hard', summary: '0/1 Knapsack and LCS dynamic programming tables not yet studied.' }
        ]
      }
    ]
  },
  {
    id: 'dbms',
    code: 'CS302',
    name: 'Database Management Systems',
    description: 'Relational database concepts, SQL, normalization, transaction management, and indexing.',
    semester: 3,
    credits: 4,
    units: [
      {
        id: 'dbms-u1',
        unitNumber: 1,
        title: 'Relational Model & SQL',
        topics: [
          { id: 'dbms-1', title: 'ER Modeling & Relational Algebra', keywords: ['er diagram', 'entity', 'relationship', 'relational algebra', 'select', 'project', 'join'], status: 'covered', difficulty: 'Easy', summary: 'Entity relationships and relational algebra operators understood.' },
          { id: 'dbms-2', title: 'Complex SQL Queries & Joins', keywords: ['sql', 'inner join', 'outer join', 'group by', 'having', 'subquery'], status: 'covered', difficulty: 'Medium', summary: 'Subqueries, aggregation, and multi-table joins practiced.' }
        ]
      },
      {
        id: 'dbms-u2',
        unitNumber: 2,
        title: 'Database Normalization',
        topics: [
          { id: 'dbms-3', title: 'Functional Dependencies & 1NF, 2NF, 3NF', keywords: ['functional dependency', 'normalization', '1nf', '2nf', '3nf', 'redundancy'], status: 'partially-covered', difficulty: 'Medium', summary: '1NF and 2NF clear; 3NF functional dependency decomposition needs practice.' },
          { id: 'dbms-4', title: 'Boyce-Codd Normal Form (BCNF)', keywords: ['bcnf', 'boyce codd', 'superkey', 'lossless join', 'dependency preservation'], status: 'missing', difficulty: 'Hard', summary: 'BCNF superkey rules not yet covered.' }
        ]
      },
      {
        id: 'dbms-u3',
        unitNumber: 3,
        title: 'Transactions & Concurrency Control',
        topics: [
          { id: 'dbms-5', title: 'ACID Properties & Serializability', keywords: ['acid', 'atomicity', 'consistency', 'isolation', 'durability', 'serializability', 'schedule'], status: 'partially-covered', difficulty: 'Medium', summary: 'ACID principles clear; conflict serializability schedules need review.' },
          { id: 'dbms-6', title: 'Locking Protocols & Two-Phase Locking (2PL)', keywords: ['locking', '2pl', 'two phase locking', 'shared lock', 'exclusive lock', 'deadlock'], status: 'missing', difficulty: 'Hard', summary: 'Strict 2PL and deadlock prevention algorithms missing from study notes.' }
        ]
      }
    ]
  },
  {
    id: 'os',
    code: 'CS303',
    name: 'Operating Systems',
    description: 'Process management, concurrency, memory management, file systems, and storage architecture.',
    semester: 4,
    credits: 4,
    units: [
      {
        id: 'os-u1',
        unitNumber: 1,
        title: 'Process & Thread Management',
        topics: [
          { id: 'os-1', title: 'Process Control Block & Context Switching', keywords: ['process', 'pcb', 'context switch', 'process state', 'fork'], status: 'covered', difficulty: 'Easy', summary: 'Process creation and state transition diagrams mastered.' },
          { id: 'os-2', title: 'CPU Scheduling Algorithms (FCFS, SJF, Round Robin)', keywords: ['cpu scheduling', 'fcfs', 'sjf', 'round robin', 'turnaround time', 'waiting time'], status: 'covered', difficulty: 'Medium', summary: 'Gantt charts and average waiting time calculations completed.' }
        ]
      },
      {
        id: 'os-u2',
        unitNumber: 2,
        title: 'Synchronization & Deadlocks',
        topics: [
          { id: 'os-3', title: 'Semaphores & Mutexes', keywords: ['semaphore', 'mutex', 'critical section', 'peterson', 'race condition'], status: 'partially-covered', difficulty: 'Medium', summary: 'Critical section problem understood; counting semaphore code needs review.' },
          { id: 'os-4', title: 'Banker’s Algorithm & Deadlock Avoidance', keywords: ['deadlock', 'banker algorithm', 'safe state', 'resource allocation', 'hold and wait'], status: 'missing', difficulty: 'Hard', summary: 'Banker’s algorithm matrix calculations missing.' }
        ]
      },
      {
        id: 'os-u3',
        unitNumber: 3,
        title: 'Memory Management',
        topics: [
          { id: 'os-5', title: 'Paging & Virtual Memory', keywords: ['paging', 'page table', 'virtual memory', 'tlb', 'translation lookaside buffer'], status: 'partially-covered', difficulty: 'Medium', summary: 'Page address translation clear; TLB hit ratio calculation pending.' },
          { id: 'os-6', title: 'Page Replacement Algorithms (FIFO, LRU, Optimal)', keywords: ['page replacement', 'fifo', 'lru', 'least recently used', 'page fault', 'belady anomaly'], status: 'missing', difficulty: 'Medium', summary: 'LRU stack implementation and Belady anomaly not yet analyzed.' }
        ]
      }
    ]
  },
  {
    id: 'cn',
    code: 'CS304',
    name: 'Computer Networks',
    description: 'ISO/OSI reference model, TCP/IP protocol suite, routing protocols, data link layer, and network security.',
    semester: 4,
    credits: 3,
    units: [
      {
        id: 'cn-u1',
        unitNumber: 1,
        title: 'Network Layers & Physical Layer',
        topics: [
          { id: 'cn-1', title: 'OSI 7-Layer & TCP/IP Model', keywords: ['osi model', 'tcp ip', 'application layer', 'transport layer', 'network layer'], status: 'covered', difficulty: 'Easy', summary: 'Protocol stack layers and encapsulation clear.' },
          { id: 'cn-2', title: 'Framing, Error Detection & CRC', keywords: ['framing', 'crc', 'cyclic redundancy check', 'error detection', 'parity'], status: 'covered', difficulty: 'Medium', summary: 'CRC polynomial division worked out.' }
        ]
      },
      {
        id: 'cn-u2',
        unitNumber: 2,
        title: 'Network & Transport Layers',
        topics: [
          { id: 'cn-3', title: 'IPv4 & IPv6 Subnetting & CIDR', keywords: ['ipv4', 'ipv6', 'subnetting', 'cidr', 'ip address', 'subnet mask'], status: 'partially-covered', difficulty: 'Medium', summary: 'Classful IP addressing clear; CIDR prefix masking needs calculation drill.' },
          { id: 'cn-4', title: 'TCP vs UDP Protocols & 3-Way Handshake', keywords: ['tcp', 'udp', 'three way handshake', 'sliding window', 'flow control', 'congestion control'], status: 'missing', difficulty: 'Hard', summary: 'TCP congestion control algorithms (Reno, Tahoe) not yet studied.' }
        ]
      }
    ]
  }
];

export const SAMPLE_STUDY_NOTES = [
  {
    id: 'sample-1',
    title: 'Data Structures Unit 2 & 3: Trees, AVL Rotations & Hash Tables',
    subjectId: 'dsa',
    content: `
Study Notes for CS301 Data Structures:
Topic: Binary Search Trees & Balanced Trees
- Binary Search Tree (BST): Left child is smaller than root, right child is greater. Search, insert, and delete operations take O(h) time.
- AVL Trees & Rotations: An AVL tree is a height-balanced binary search tree. Balance factor = height(left) - height(right), which must be -1, 0, or +1.
- We perform Single Left Rotation (LL), Single Right Rotation (RR), Double Left-Right Rotation (LR), and Double Right-Left Rotation (RL) to rebalance nodes after insertion or deletion.
- Hash Tables & Collision Resolution: Hashing maps key to index using a hash function. When two keys hash to the same index, a collision occurs.
- Chaining: Uses linked list at each bucket.
- Open Addressing: Uses Linear Probing, Quadratic Probing, or Double Hashing to find empty slot.
    `
  },
  {
    id: 'sample-2',
    title: 'Operating Systems: Banker\'s Algorithm & LRU Page Replacement',
    subjectId: 'os',
    content: `
OS Unit 2 & 3 Revision Notes:
- Deadlock Avoidance with Banker's Algorithm:
  Banker's algorithm checks safe state using matrices: Allocation, Max, Need = Max - Allocation, Available vector.
  Processes request resources only if Need <= Available. If system stays in safe sequence, request granted; otherwise deferred.
- Memory Management & Page Replacement Algorithms:
  Virtual memory divides logical memory into pages and physical memory into frames.
  Page Replacement Algorithms when Page Fault occurs:
  1. FIFO (First In First Out): Replaces oldest page. Subject to Belady's Anomaly where more frames cause more page faults!
  2. LRU (Least Recently Used): Replaces page that hasn't been used for longest duration. Uses stack or timestamp counters.
  3. Optimal Page Replacement: Replaces page that will not be used for longest future time (theoretical benchmark).
    `
  },
  {
    id: 'sample-3',
    title: 'Database Systems: 3NF, BCNF & Two-Phase Locking (2PL)',
    subjectId: 'dbms',
    content: `
DBMS Unit 2 & 3 Notes:
- Normalization:
  - 3NF (Third Normal Form): Must be in 2NF and have no transitive functional dependencies (X -> Y where Y is non-prime and X is not superkey).
  - BCNF (Boyce-Codd Normal Form): A stricter version of 3NF. For every non-trivial functional dependency X -> Y, X MUST be a superkey. Eliminates all redundancy from functional dependencies.
- Transaction Concurrency Control:
  - ACID Properties: Atomicity, Consistency, Isolation, Durability.
  - Two-Phase Locking Protocol (2PL): Ensures conflict serializability.
    Growing Phase: Transaction acquires locks (Shared or Exclusive) but cannot release any lock.
    Shrinking Phase: Transaction releases locks but cannot acquire any new lock.
  - Strict 2PL: All exclusive locks held by transaction are released ONLY after transaction commits or aborts. Prevents cascading rollbacks.
    `
  }
=======
  name: string;
  code: string;
  semester: number;
  accent: "lavender" | "powder" | "peach" | "sage" | "sunny";
  units: Unit[];
}

export interface University {
  id: string;
  name: string;
  short: string;
  location: string;
  status: "active" | "coming-soon";
  degrees: string[];
}

export const universities: University[] = [
  {
    id: "iitd",
    name: "Indian Institute of Technology Delhi",
    short: "IIT Delhi",
    location: "Hauz Khas, New Delhi",
    status: "active",
    degrees: ["B.Tech", "M.Tech", "BCA", "B.Sc"],
  },
  {
    id: "annauniv",
    name: "Anna University",
    short: "Anna University",
    location: "Chennai, Tamil Nadu",
    status: "coming-soon",
    degrees: ["B.E", "B.Tech", "M.E"],
  },
  {
    id: "utu",
    name: "Uttarakhand Technical University",
    short: "UTU",
    location: "Dehradun, Uttarakhand",
    status: "coming-soon",
    degrees: ["B.Tech", "MCA", "M.Tech"],
  },
];

export const branches = [
  "Computer Science and Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
];

export const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

const t = (id: string, name: string): Topic => ({ id, name });

export const subjects: Subject[] = [
  {
    id: "ds",
    name: "Data Structures",
    code: "COL106",
    semester: 3,
    accent: "lavender",
    units: [
      {
        id: "ds-u1",
        number: 1,
        title: "Foundations & Arrays",
        summary: "Complexity analysis, abstract data types and linear arrays.",
        topics: [
          t("ds-u1-t1", "Abstract Data Types"),
          t("ds-u1-t2", "Time & Space Complexity"),
          t("ds-u1-t3", "Asymptotic Notation"),
          t("ds-u1-t4", "One-dimensional Arrays"),
          t("ds-u1-t5", "Multi-dimensional Arrays"),
          t("ds-u1-t6", "Sparse Matrices"),
        ],
      },
      {
        id: "ds-u2",
        number: 2,
        title: "Linked Lists",
        summary: "Dynamic linear structures and their core operations.",
        topics: [
          t("ds-u2-t1", "Singly Linked Lists"),
          t("ds-u2-t2", "Doubly Linked Lists"),
          t("ds-u2-t3", "Circular Linked Lists"),
          t("ds-u2-t4", "Insertion"),
          t("ds-u2-t5", "Deletion"),
          t("ds-u2-t6", "Traversal & Searching"),
          t("ds-u2-t7", "Polynomial Representation"),
          t("ds-u2-t8", "Applications of Linked Lists"),
        ],
      },
      {
        id: "ds-u3",
        number: 3,
        title: "Stacks & Queues",
        summary: "LIFO and FIFO structures with classic applications.",
        topics: [
          t("ds-u3-t1", "Stack ADT"),
          t("ds-u3-t2", "Expression Evaluation"),
          t("ds-u3-t3", "Recursion & Call Stack"),
          t("ds-u3-t4", "Queue ADT"),
          t("ds-u3-t5", "Circular Queues"),
          t("ds-u3-t6", "Priority Queues"),
          t("ds-u3-t7", "Deques"),
        ],
      },
      {
        id: "ds-u4",
        number: 4,
        title: "Trees",
        summary: "Hierarchical structures, traversals and balanced trees.",
        topics: [
          t("ds-u4-t1", "Binary Trees"),
          t("ds-u4-t2", "Tree Traversals"),
          t("ds-u4-t3", "Binary Search Trees"),
          t("ds-u4-t4", "AVL Trees"),
          t("ds-u4-t5", "Heaps & Heapsort"),
          t("ds-u4-t6", "Tries"),
        ],
      },
      {
        id: "ds-u5",
        number: 5,
        title: "Graphs & Hashing",
        summary: "Graph representations, traversals and hash-based lookup.",
        topics: [
          t("ds-u5-t1", "Graph Representations"),
          t("ds-u5-t2", "Graph Traversal (BFS/DFS)"),
          t("ds-u5-t3", "Shortest Paths"),
          t("ds-u5-t4", "Minimum Spanning Trees"),
          t("ds-u5-t5", "Hashing"),
          t("ds-u5-t6", "Collision Resolution"),
        ],
      },
    ],
  },
  {
    id: "dbms",
    name: "Database Management Systems",
    code: "COL362",
    semester: 3,
    accent: "powder",
    units: [
      {
        id: "dbms-u1",
        number: 1,
        title: "Data Models",
        summary: "ER modelling and the relational model.",
        topics: [
          t("dbms-u1-t1", "ER Diagrams"),
          t("dbms-u1-t2", "Relational Model"),
          t("dbms-u1-t3", "Keys & Constraints"),
          t("dbms-u1-t4", "Relational Algebra"),
        ],
      },
      {
        id: "dbms-u2",
        number: 2,
        title: "SQL & Query Design",
        summary: "Querying, joins and views.",
        topics: [
          t("dbms-u2-t1", "DDL & DML"),
          t("dbms-u2-t2", "Joins"),
          t("dbms-u2-t3", "Nested Queries"),
          t("dbms-u2-t4", "Views & Indexes"),
        ],
      },
      {
        id: "dbms-u3",
        number: 3,
        title: "Normalisation & Transactions",
        summary: "Functional dependencies, normal forms, concurrency.",
        topics: [
          t("dbms-u3-t1", "Functional Dependencies"),
          t("dbms-u3-t2", "Normal Forms"),
          t("dbms-u3-t3", "Transactions & ACID"),
          t("dbms-u3-t4", "Concurrency Control"),
          t("dbms-u3-t5", "Recovery"),
        ],
      },
    ],
  },
  {
    id: "os",
    name: "Operating Systems",
    code: "COL331",
    semester: 4,
    accent: "peach",
    units: [
      {
        id: "os-u1",
        number: 1,
        title: "Processes & Threads",
        summary: "Process lifecycle, scheduling and threads.",
        topics: [
          t("os-u1-t1", "Process States"),
          t("os-u1-t2", "Context Switching"),
          t("os-u1-t3", "Threads"),
          t("os-u1-t4", "CPU Scheduling"),
        ],
      },
      {
        id: "os-u2",
        number: 2,
        title: "Synchronisation",
        summary: "Critical sections, semaphores and deadlocks.",
        topics: [
          t("os-u2-t1", "Critical Section Problem"),
          t("os-u2-t2", "Semaphores & Monitors"),
          t("os-u2-t3", "Classical Problems"),
          t("os-u2-t4", "Deadlocks"),
        ],
      },
      {
        id: "os-u3",
        number: 3,
        title: "Memory & Storage",
        summary: "Paging, virtual memory and file systems.",
        topics: [
          t("os-u3-t1", "Paging & Segmentation"),
          t("os-u3-t2", "Virtual Memory"),
          t("os-u3-t3", "Page Replacement"),
          t("os-u3-t4", "File Systems"),
        ],
      },
    ],
  },
  {
    id: "cn",
    name: "Computer Networks",
    code: "COL334",
    semester: 4,
    accent: "sage",
    units: [
      {
        id: "cn-u1",
        number: 1,
        title: "Network Foundations",
        summary: "Layered models and physical transmission.",
        topics: [
          t("cn-u1-t1", "OSI & TCP/IP Models"),
          t("cn-u1-t2", "Transmission Media"),
          t("cn-u1-t3", "Switching Techniques"),
        ],
      },
      {
        id: "cn-u2",
        number: 2,
        title: "Link & Network Layer",
        summary: "Framing, error control, routing and addressing.",
        topics: [
          t("cn-u2-t1", "Error Detection"),
          t("cn-u2-t2", "MAC Protocols"),
          t("cn-u2-t3", "IP Addressing"),
          t("cn-u2-t4", "Routing Algorithms"),
        ],
      },
      {
        id: "cn-u3",
        number: 3,
        title: "Transport & Application",
        summary: "Reliability, congestion control and app protocols.",
        topics: [
          t("cn-u3-t1", "TCP & UDP"),
          t("cn-u3-t2", "Congestion Control"),
          t("cn-u3-t3", "DNS & HTTP"),
        ],
      },
    ],
  },
  {
    id: "math",
    name: "Mathematics",
    code: "MTL106",
    semester: 3,
    accent: "sunny",
    units: [
      {
        id: "math-u1",
        number: 1,
        title: "Linear Algebra",
        summary: "Vector spaces and linear transformations.",
        topics: [
          t("math-u1-t1", "Vector Spaces"),
          t("math-u1-t2", "Matrices & Rank"),
          t("math-u1-t3", "Eigenvalues"),
        ],
      },
      {
        id: "math-u2",
        number: 2,
        title: "Probability",
        summary: "Random variables and distributions.",
        topics: [
          t("math-u2-t1", "Random Variables"),
          t("math-u2-t2", "Standard Distributions"),
          t("math-u2-t3", "Expectation & Variance"),
        ],
      },
      {
        id: "math-u3",
        number: 3,
        title: "Discrete Structures",
        summary: "Graphs, relations and combinatorics.",
        topics: [
          t("math-u3-t1", "Relations & Functions"),
          t("math-u3-t2", "Combinatorics"),
          t("math-u3-t3", "Graph Theory Basics"),
        ],
      },
    ],
  },
];

export const getSubject = (id: string) => subjects.find((s) => s.id === id);
export const getUnit = (subjectId: string, unitId: string) =>
  getSubject(subjectId)?.units.find((u) => u.id === unitId);
export const allTopics = (s: Subject) => s.units.flatMap((u) => u.topics);

export function topicName(topicId: string) {
  for (const s of subjects) {
    for (const u of s.units) {
      const found = u.topics.find((x) => x.id === topicId);
      if (found) return found.name;
    }
  }
  return topicId;
}

/** Seeded "already completed" topics so the demo opens with realistic progress. */
export const seededCompleted: string[] = [
  // Data Structures ~82%
  ...["ds-u1-t1", "ds-u1-t2", "ds-u1-t3", "ds-u1-t4", "ds-u1-t5", "ds-u1-t6"],
  ...["ds-u2-t1", "ds-u2-t2", "ds-u2-t3", "ds-u2-t6", "ds-u2-t7", "ds-u2-t8"],
  ...["ds-u3-t1", "ds-u3-t2", "ds-u3-t3", "ds-u3-t4", "ds-u3-t5", "ds-u3-t6"],
  ...["ds-u4-t1", "ds-u4-t2", "ds-u4-t3"],
  ...["ds-u5-t1", "ds-u5-t5"],
  // DBMS ~71%
  ...["dbms-u1-t1", "dbms-u1-t2", "dbms-u1-t3", "dbms-u1-t4"],
  ...["dbms-u2-t1", "dbms-u2-t2", "dbms-u2-t3"],
  ...["dbms-u3-t1", "dbms-u3-t2"],
  // OS ~64%
  ...["os-u1-t1", "os-u1-t2", "os-u1-t3", "os-u1-t4"],
  ...["os-u2-t1", "os-u2-t2", "os-u2-t3"],
  ...["os-u3-t1"],
  // CN ~76%
  ...["cn-u1-t1", "cn-u1-t2", "cn-u1-t3"],
  ...["cn-u2-t1", "cn-u2-t2", "cn-u2-t3"],
  ...["cn-u3-t1", "cn-u3-t2"],
  // Mathematics ~88%
  ...["math-u1-t1", "math-u1-t2", "math-u1-t3"],
  ...["math-u2-t1", "math-u2-t2", "math-u2-t3"],
  ...["math-u3-t1", "math-u3-t2"],
];

export type ResourceType = "notes" | "video";

export interface Resource {
  id: string;
  title: string;
  creator: string;
  type: ResourceType;
  subjectId: string;
  unitId: string;
  topicIds: string[];
  match: number;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  duration?: string;
  pages?: number;
  publishedByUser?: boolean;
}

export const RESOURCE_PRICE = 50;

export const seedResources: Resource[] = [
  {
    id: "r1",
    title: "Data Structures Unit 2 Complete Notes",
    creator: "Rahul",
    type: "notes",
    subjectId: "ds",
    unitId: "ds-u2",
    topicIds: ["ds-u2-t1", "ds-u2-t2", "ds-u2-t3", "ds-u2-t4", "ds-u2-t6", "ds-u2-t7"],
    match: 94,
    price: 50,
    rating: 4.8,
    reviews: 126,
    pages: 38,
    description:
      "Handwritten-style original notes covering the whole of Unit 2 with diagrams for every pointer operation, dry-run tables and 20 solved problems.",
  },
  {
    id: "r2",
    title: "Linked Lists in 30 Minutes",
    creator: "Ananya",
    type: "video",
    subjectId: "ds",
    unitId: "ds-u2",
    topicIds: ["ds-u2-t1", "ds-u2-t2", "ds-u2-t3", "ds-u2-t5"],
    match: 91,
    price: 50,
    rating: 4.9,
    reviews: 208,
    duration: "30 min",
    description:
      "A fast, whiteboard-style walkthrough of every linked list variant, ending with deletion edge cases that show up in end-semester papers.",
  },
  {
    id: "r3",
    title: "Insertion & Deletion: Every Edge Case",
    creator: "Kabir",
    type: "notes",
    subjectId: "ds",
    unitId: "ds-u2",
    topicIds: ["ds-u2-t4", "ds-u2-t5"],
    match: 88,
    price: 50,
    rating: 4.6,
    reviews: 74,
    pages: 21,
    description:
      "Focused notes for the two operations students lose the most marks on, with pointer-state diagrams for head, middle and tail cases.",
  },
  {
    id: "r4",
    title: "Trees & Traversals Crash Notes",
    creator: "Meera",
    type: "notes",
    subjectId: "ds",
    unitId: "ds-u4",
    topicIds: ["ds-u4-t1", "ds-u4-t2", "ds-u4-t3", "ds-u4-t4"],
    match: 90,
    price: 50,
    rating: 4.7,
    reviews: 91,
    pages: 34,
    description:
      "Binary trees to AVL rotations with recursion trees drawn out step by step, plus a rotation cheat sheet.",
  },
  {
    id: "r5",
    title: "Graph Traversal in 30 Minutes",
    creator: "Devansh",
    type: "video",
    subjectId: "ds",
    unitId: "ds-u5",
    topicIds: ["ds-u5-t1", "ds-u5-t2"],
    match: 87,
    price: 50,
    rating: 4.5,
    reviews: 63,
    duration: "30 min",
    description:
      "BFS and DFS built from scratch on paper, then coded, with queue and stack states traced side by side.",
  },
  {
    id: "r6",
    title: "Hashing & Collision Resolution Notes",
    creator: "Sara",
    type: "notes",
    subjectId: "ds",
    unitId: "ds-u5",
    topicIds: ["ds-u5-t5", "ds-u5-t6"],
    match: 85,
    price: 50,
    rating: 4.4,
    reviews: 42,
    pages: 18,
    description:
      "Hash functions, load factor arithmetic, chaining vs open addressing with worked numerical examples.",
  },
  {
    id: "r7",
    title: "Normalisation Made Obvious",
    creator: "Ishaan",
    type: "video",
    subjectId: "dbms",
    unitId: "dbms-u3",
    topicIds: ["dbms-u3-t1", "dbms-u3-t2"],
    match: 89,
    price: 50,
    rating: 4.7,
    reviews: 118,
    duration: "30 min",
    description:
      "Functional dependencies to BCNF using one running example, so the normal forms stop feeling arbitrary.",
  },
  {
    id: "r8",
    title: "Deadlocks & Semaphores Unit Notes",
    creator: "Priya",
    type: "notes",
    subjectId: "os",
    unitId: "os-u2",
    topicIds: ["os-u2-t1", "os-u2-t2", "os-u2-t3", "os-u2-t4"],
    match: 92,
    price: 50,
    rating: 4.8,
    reviews: 87,
    pages: 29,
    description:
      "Classical synchronisation problems written out as code plus a Banker's algorithm walkthrough.",
  },
];

export interface Purchase {
  resourceId: string;
  price: number;
  purchasedAt: number;
}

export interface Sale {
  month: string;
  sales: number;
  earnings: number;
}

export const creatorSales: Sale[] = [
  { month: "Mar", sales: 3, earnings: 150 },
  { month: "Apr", sales: 5, earnings: 250 },
  { month: "May", sales: 6, earnings: 300 },
  { month: "Jun", sales: 9, earnings: 450 },
  { month: "Jul", sales: 8, earnings: 400 },
  { month: "Aug", sales: 12, earnings: 600 },
];

export const creatorBaseStats = {
  resources: 12,
  sales: 43,
  earnings: 2150,
};

/** Conceptual, clearly-labelled comparison of how curricula can differ. */
export const comparisonDemo = [
  {
    university: "IIT Delhi",
    status: "Demo comparison",
    units: 5,
    highlight: "Linked lists sit in Unit 2 alongside polynomial representation.",
    depth: "Heavy proof and complexity emphasis",
  },
  {
    university: "Anna University",
    status: "Demo comparison",
    units: 5,
    highlight: "Linear structures often grouped into a single early unit.",
    depth: "Implementation and lab weighted",
  },
  {
    university: "Uttarakhand Technical University",
    status: "Demo comparison",
    units: 4,
    highlight: "Trees and graphs may share one combined unit.",
    depth: "Exam-pattern oriented",
  },
>>>>>>> 34e7f9f8cf1629ba9848c49838794d40b2ab8410
];
