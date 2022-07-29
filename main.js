function setup()
{
    canvas = createCanvas(650 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modalLoaded);
    document.getElementById("status").innerHTML = "status-detecting objects";
}

function modalLoaded()
{
    console.log("Modal is Loaded!");
    status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error , results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;

}

status = "";
img = "";
objects = [];

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function draw()
{
  image(img , 0 , 0 , 640 , 420);
  if(status != "")
  {
      for(i = 0; i < objects.length; i++)
      {
          document.getElementById("status").innerHTML = "status : object detected";
          fill("#ff0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + "" + percent + "%" , objects[i].x , objects[i].y);
          nofill();
          stroke("#ff0000");
          rect(objects[i].x , object[i].y , objects[i].width , objects[i].height);
      }
  }
}