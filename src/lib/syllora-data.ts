export interface Topic {
  id: string;
  title: string;
  keywords: string[];
  status: 'covered' | 'partially-covered' | 'missing';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  summary?: string;
  lastAnalyzed?: string;
}

export interface Unit {
  id: string;
  unitNumber: number;
  title: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
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
];
