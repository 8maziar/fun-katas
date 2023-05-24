// Please do not change the name of this function
function updateRemoteStudents(arr) {
  return arr.map((student) => {
    if (!student.location) {
      student.location = "remote";
      return student;
    }
    return student;
  });
}

module.exports = updateRemoteStudents;
