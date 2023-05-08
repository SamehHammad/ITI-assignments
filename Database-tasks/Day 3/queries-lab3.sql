
-- Lab 3 (Part 1)
--1.	Display the Department id, name and id and the name of its manager.
select d.Dnum , d.Dname ,
e.SSN , concat(e.Fname , ' ' , e.Lname) [Full name] 
from Departments d INNER JOIN Employee e on SSN = MGRSSN;
--2.Display the name of the departments and the name of the projects under its control.
select d.Dname , p.Pname from Departments d
INNER JOIN Project p on d.Dnum = p.Dnum;
--3.Display the full data about all the dependence associated with the name of the employee they depend on him/her.
select d. *, concat(e.Fname , ' ' , e.Lname) as Employee_name 
from Employee e INNER JOIN Dependent d on SSN = ESSN;
--4.Display the Id, name and location of the projects in Cairo or Alex city.
select Pnumber , Pname , Plocation from Project 
where (city = 'Cairo' OR city = 'Alex');
--5.Display the Projects full data of the projects with a name starts with "a" letter.
select * from Project where Pname LIKE 'A%';
--6.display all the employees in department 30 whose salary from 1000 to 2000 LE monthly
select concat(Fname , ' ' , Lname) as Employee_name,Dno,Salary from Employee
where Dno = 30 AND Salary between 1000 AND 2000;
--7.Retrieve the names of all employees in department 10 who works more than or equal 10 hours per week on "AL Rabwah" project.
select concat(e.Fname , ' ' , e.Lname) as Employee_name from Employee e 
INNER JOIN Works_for w ON e.SSN = w.ESSN
INNER JOIN Project p ON w.Pno = p.Pnumber
where p.Dnum = 10 AND w.hours >= 10 AND p.Pname = 'AL Rabwah';
--8.Find the names of the employees who directly supervised with Kamel Mohamed.
select concat(e.Fname , ' ' , e.Lname) as Employee_name from Employee e
INNER JOIN Employee s on e.Superssn = s.SSN
where concat(s.Fname , ' ' , s.Lname) = 'Kamel Mohamed';
--9.Retrieve the names of all employees and the names of the projects they are working on, sorted by the project name.
select concat(e.Fname , ' ' , e.Lname) as Employee_name , p.Pname from Employee e
INNER JOIN Works_for w on e.SSN = w.ESSN INNER JOIN Project p 
on w.Pno = p.Pnumber order by p.Pname;
--10.For each project located in Cairo City , find the project number, the controlling department name ,the department manager last name ,address and birthdate.
select p.Pnumber , d.Dname , e.Lname , e.Address , e.Bdate
from Project p 
INNER JOIN Departments d on d.Dnum = p.Dnum
INNER JOIN Employee e on d.MGRSSN = e.SSN
where p.city = 'Cairo';
--11.Display All Data of the managers
select * from Employee where SSN in (select MGRSSN from Departments);
--12.Display All Employees data and the data of their dependents even if they have no dependents
select * from Employee e LEFT JOIN Dependent d on e.SSN = d.ESSN;
--13.Insert your personal data to the employee table as a new employee in department number 30, SSN = 102672, Superssn = 112233, salary=3000.
INSERT INTO Employee VALUES('Sameh','Hammad',102672,'1995-09-18 00:00:00','cairo','M',3000,'112233','30');
--14.Insert another employee with personal data your friend as new employee in department number 30, SSN = 102660, but don’t enter any value for salary or supervisor number to him.
INSERT INTO employee (Fname, Lname, Dno, SSN, Salary, Superssn)
VALUES ('Mahmoud', 'khalia', 30, 102670, 142545, NULL);

--15.Upgrade your salary by 20 % of its last value.
Update Employee SET Salary += Salary * 0.2 ;

-- Lab 3 (Part 2)

--1.Display (Using Union Function)
--a.The name and the gender of the dependence that's gender is Female and depending on Female Employee.
--b.And the male dependence that depends on Male Employee.

SELECT Dependent_name, Sex FROM Dependent
WHERE Sex='F'
UNION
SELECT Employee.Fname + ' ' + Employee.Lname as name ,  Sex FROM Employee
WHERE Sex='F'
SELECT Dependent_name, Sex FROM Dependent
WHERE Sex='M'
UNION
SELECT Employee.Fname + ' ' + Employee.Lname as name ,  Sex FROM Employee
WHERE Sex='M'
--2.For each project, list the project name and the total hours per week (for all employees) spent on that project.
select p.Pname , SUM(w.Hours) [total hours] from Works_for w, Project p
where w.Pno = p.Pnumber group by p.Pname;
--3.Display the data of the department which has the smallest employee ID over all employees' ID.
SELECT *
FROM Departments d
WHERE d.Dnum = (
  SELECT Dno
  FROM Employee
  WHERE SSN = (
    SELECT MIN(SSN)
    FROM Employee
  )
);

--4.For each department, retrieve the department name and the maximum, minimum and average salary of its employees.
select d.Dname , min(e.Salary), max(e.Salary), avg(e.Salary) 
from Employee e , Departments d where d.Dnum = e.Dno group by d.Dname; 
--5.Try to get the max 2 salaries 
select top(2) Salary from Employee
order by Salary desc;
--6.Get the names of employees that is similar to any dependent name
SELECT CONCAT(e.Fname, ' ', e.Lname) AS Employee_name
FROM Employee e
INTERSECT
SELECT Dependent_name
FROM Dependent;

--7.In the department table insert new department called "DEPT IT" , with id 100, employee with SSN = 112233 as a manager for this department. The start date for this manager is '1-11-2006'
INSERT INTO Departments (Dname, Dnum, MGRSSN, [MGRStart Date])
VALUES ('DEPT IT', 100, 112233, '1-11-2006');
--8.	Do what is required if you know that : Mrs.Noha Mohamed(SSN=968574)  moved to be the manager of the new department (id = 100), and they give you(use your SSN from question1) her position (Dept. 20 manager) 

--a.	First try to update her record in the department table
--b.	Update your record to be department 20 manager.
--Update the data of employee number=102660 to be in your teamwork (he will be supervised by you) (your SSN =102672)

update Departments SET MGRSSN = 102672 where MGRSSN = 968574 AND Dnum = 100;
update Employee SET Superssn = '102672' where SSN = 102660;
--9.	Unfortunately the company ended the contract with Mr. Kamel Mohamed (SSN=223344) so try to delete his data from your database in case you know that you will be temporarily in his position.
--Hint: (Check if Mr. Kamel has dependents, works as a department manager, supervises any employees or works in any projects and handle these cases).

-- Check if the employee has any dependents
DELETE FROM Dependent WHERE Essn = '223344';

-- Check if the employee is a supervisor of any employees
UPDATE Employee SET Superssn = NULL WHERE Superssn = '223344';

-- Check if the employee is a manager of any department
UPDATE Departments SET Mgrssn = NULL WHERE Mgrssn = '223344';

-- Check if the employee is associated with any project
DELETE FROM Works_for WHERE ESSN = '223344';

-- Delete the employee record from the Employee table
DELETE FROM Employee WHERE SSN = '223344';




