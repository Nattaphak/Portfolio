var postCount = 0;
function postFunction()
{ 
    

    if(postCount == 0)
    {
        var text = document.getElementById("text1").value;
        document.getElementById("topic1").innerHTML = text;
        postCount++;
    }

    else if(postCount == 1)
    {
        var text = document.getElementById("text1").value;
        document.getElementById("comment1").innerHTML = text;
        postCount++;
    }

    else if(postCount == 2)
    {
        var text = document.getElementById("text1").value;
        document.getElementById("comment2").innerHTML = text;
        postCount++;
    }
}

function clearFunction()
{
    postCount = 0;
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
}