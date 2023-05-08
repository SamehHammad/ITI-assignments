
fetch('https://jsonplaceholder.typicode.com/users')
  .then(respone => respone.json())

  .then(function (myData) {
    const tableBody = document.querySelector('tbody');
    myData.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.website}</td>`;
      tableBody.appendChild(row);
    });
  })
  .catch(err => console.error(err));
