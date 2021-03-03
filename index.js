class Circle{
  constructor(radius){
    this.radius = radius
  }

    set diameter(diameter){
      this.radius = diameter / 2
    };

    get diameter(){
      return this.radius * 2
    };

    set circumference(circumference){
      this.diameter = circumference / Math.PI
    };

    get circumference(){
      return Math.PI * this.diameter 
    };

    set area(area){
      this.area = area
    };

    get area(){
      return Math.PI * Math.pow(this.radius, 2)
    };
}