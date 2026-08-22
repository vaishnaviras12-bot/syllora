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
}

export interface Unit {
  id: string;
  number: number;
  title: string;
  summary: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
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
];
