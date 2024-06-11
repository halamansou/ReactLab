import React from "react";
import Button from "react-bootstrap/Button";

export function StudentData({ students, handleDelete }) {
  return (
    <div className="container mt-4">
      <table className="table table-dark table-striped table-bordered table-hover table-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
