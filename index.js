// Add your Circle class here
class Circle{
constructor(radius){
 this.radius = radius
 
}

get diameter(){
return  this.radius *2
}
get circumference(){
    return this.radius * 2* Math.PI
}
get area(){
    return this.radius * this.radius *Math.PI
} 
set diameter(diam){
      this.radius = diam /2

}
set circumference(cir){
    this.radius = cir /( 2* Math.PI) 
}
set area(ar){
    this.radius = Math.sqrt(ar/Math.PI )
} 

}