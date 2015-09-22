<?php
 class clsPersona
{
  //Atributos
  private $strNombre;
  private $strApellido;

//Metodos
 public function Guardar($strNombre,$strApellido)
 {
   echo $strNombre;
   echo $strApellido;
   echo "<br>";
 }
 public function Mostar()
 {
   return true;
 }

}//Cierre de la clase
$per=new clsPersona();
$per->Mostar();
if ($per->Mostar()) {
  echo "funcionan los bool";
}

 ?>
