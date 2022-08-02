<html>
<body style=" background-image: url(pnglogin.jpg);
    height: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;" >

<h1>Here is your ticket details :-</h1>

<?php 

session_start();

require "db.php";

$pname=$_POST["pname"];
$page=$_POST["page"];
$pgender=$_POST["pgender"];
$nos=$_SESSION["nos"];

$tno=$_SESSION["tno"];
$doj=$_SESSION["doj"];
$sp=$_SESSION["sp"];
$dp=$_SESSION["dp"];
$class=$_SESSION["class"];

// echo "<br><br>train no.: $tno";
// echo "\tDate: $doj";
// echo "\t  Class: $class";
// echo "<br><br>From: $sp";
// echo "<br><br>To: $dp";
// echo "<br><br>No.s: $nos";

for($i=0;$i<$_SESSION["nos"];$i++) 
{
  echo "<br>-----------------------";
  $j=$i+1;
  echo "<br>Passenger $j";
  echo "<br>-----------------------";
echo "<br><br>Name : $pname[$i]";
echo "<br><br>Age : $page[$i]";
echo "<br><br>Gender : $pgender[$i]";
}
echo "<br>-----------------------";

$query=" SELECT fare FROM classseats WHERE trainno='".$tno."' AND class='".$class."' AND doj='".$doj."' AND sp='".$sp."' AND dp='".$dp."'  ";
$result=mysqli_query($conn,$query) or die(mysql_error());

$row=mysqli_fetch_array($result);
$fare=$row[0];
// echo "fare1: $fare";
$tempfare=0;
$temp=0;

for($i=0;$i<$_SESSION["nos"];$i++) 
{
 if($page[$i]>=18)
 {
  $temp++;
  $tempfare+=$fare;
 }
 else if($page[$i]<18)
  $tempfare+=0.5*$fare;
 else if($page[$i]>=60)
  $tempfare+=0.5*$fare;
}
// echo "tempfare:-   $tempfare";

if($temp==0)
{
 echo "<br><br>Atleast one adult must accompany!!!";
 echo "<br><br><a href=\"http://localhost/railway/enquiry.php\">Back to Enquiry</a> <br>";
 die();
}

echo "<br><br>Total fare is Rs. ".$tempfare."/-<br><br>";
// echo "<br><br><a href=\"http://localhost/railway/ticket.html\">print Ticket</a> <br>";


$sql = "INSERT INTO resv(id,trainno,sp,dp,doj,tfare,class,nos) VALUES ('".$_SESSION["id"]."','".$_SESSION["tno"]."','".$_SESSION["sp"]."','".$_SESSION["dp"]."','".$_SESSION["doj"]."','".$tempfare."','".$_SESSION["class"]."','".$_SESSION["nos"]."' )";

if ($conn->query($sql) === TRUE) 
{
 echo "<br><br>Reservation Successful";
} 

else 
{
 echo "<br><br>Error: " . $conn->error;
}

$tid=$_SESSION["id"];
$ttno=$_SESSION["tno"];
$tdoj=$_SESSION["doj"];

$query=" Select pnr from resv where id='".$tid."' AND trainno='".$ttno."' AND doj='".$tdoj."' ";
$result=mysqli_query($conn,$query) or die(mysql_error());

// echo "HI,here's your ticket details";
// print_r($result);

$row=mysqli_fetch_array($result);
$rpnr=$row['pnr'];
echo "<br><br>PNR: $rpnr ";

$tpname=$_POST['pname'];
$ntpname = count($_REQUEST['pname']);
$tpage=$_POST["page"];
$tpgender=$_POST["pgender"];

for($i=0;$i<$_SESSION["nos"];$i++) 
{
$sql = "INSERT INTO pd(pnr,pname,page,pgender) VALUES  ('".$rpnr."','".$tpname[$i]."','".$tpage[$i]."','".$tpgender[$i]."')";

if ($conn->query($sql) === TRUE) 
{
 echo "<br><br>Passenger details added!!!";
} 



else 
{
 echo "<br><br>Error: " . $conn->error;
}

//echo "Enter Passanger Name: <input type='text' name='pname[]' required> ";
//echo "Enter Passanger Age: <input type='text' name='page[]' required>";
//echo "Enter Passanger Gender: <input type='text' name='pgender[]' required> <br> ";
}
echo "<br>";

$query = mysqli_query($conn,"SELECT r.pnr,r.trainno,t.tname,r.sp,r.dp,r.doj,r.tfare,r.class,r.nos,r.status FROM resv as r,train as t where r.pnr='".$rpnr."' AND t.trainno=r.trainno ");

echo "<table>
<thead>
<td>PNR</td>
<td>Train No</td>
<td>Train_Name</td>
<td>From</td>
<td>To</td>
<td>Date</td>
<td>Fare</td>
<td>Train_Class</td>
<td>No.s</td>
<td>Status</td>
</thead>";

while($row = mysqli_fetch_array($query))
{
 echo "<tr>
 <td>".$row[0]."</td>
 <td>".$row[1]."</td>
 <td>".$row[2]."</td>
 <td>".$row[3]."</td>
 <td>".$row[4]."</td>
 <td>".$row[5]."</td>
 <td>".$row[6]."</td>
 <td>".$row[7]."</td>
 <td>".$row[8]."</td>
 <td>".$row[9]."</td>
 </tr>";
}
echo "</table>";

echo "<br><br><a href=\"http://localhost/railway/index.html\">Go Back!!!</a> <br>";

$conn->close(); 
?>
<button onclick="window.print();">Print</button>
</body>
</html>
