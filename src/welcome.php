<?php
$email=$_POST['email'];
$password=$_POST['pass'];
if($email=="smitha@gmail.com "&& $pass =='passward')
{
    echo "welcome ";

}
else
{
    echo "wrong user id or paaword";
}
?>