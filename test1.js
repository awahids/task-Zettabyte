/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 *
 * Expected newArr:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
 *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
  {
    session_id: 1,
    time: "09:00",
    student: { student_id: 1, name: "Adi" },
    class: { class_id: 1, name: "A" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: { student_id: 5, name: "Surya" },
    class: { class_id: 3, name: "C" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: { student_id: 8, name: "Edi" },
    class: { class_id: 4, name: "D" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: { student_id: 7, name: "Dede" },
    class: { class_id: 4, name: "D" },
  },
  {
    session_id: 1,
    time: "09:00",
    student: { student_id: 3, name: "Bayu" },
    class: { class_id: 2, name: "B" },
  },
  {
    session_id: 1,
    time: "09:00",
    student: { student_id: 2, name: "Budi" },
    class: { class_id: 1, name: "A" },
  },
  {
    session_id: 1,
    time: "09:00",
    student: { student_id: 4, name: "Dharma" },
    class: { class_id: 2, name: "B" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: { student_id: 3, name: "Maha" },
    class: { class_id: 3, name: "C" },
  },
];

function result(sessions) {
  // Your Code Here
  const newArr = [];
  sessions.forEach((session) => {
    let oldSession = newArr.find((v) => v.session_id == session.session_id);
    if (!oldSession) {
      oldSession = {
        session_id: session.session_id,
        time: session.time,
        classes: [],
      };
      newArr.push(oldSession);
    }
    let oldClass = oldSession.classes.find(
      (v) => v.class_id == session.class.class_id
    );
    if (!oldClass) {
      oldClass = {
        class_id: session.class.class_id,
        name: session.class.name,
        students: [],
      };
      oldSession.classes.push(oldClass);
    }
    let oldStudent = oldClass.students.find(
      (v) => v.student_id == session.student.student_id
    );
    if (!oldStudent) {
      oldStudent = {
        student_id: session.student.student_id,
        name: session.student.name,
      };
      oldClass.students.push(oldStudent);
    }
  });
  return newArr;
}

const newArr = result(sessions);
console.log(JSON.stringify(newArr, null, 2));

// console.log(result(sessions));
