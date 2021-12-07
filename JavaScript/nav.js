
const blogs = [

{ title: "Theory Blogs", 
href: "../TheoryBlogPosts/BlogPage.html"},

{ title: "BLOG 1", 
href:'../TheoryBlogPosts/Blog1.html'},

{ title: "BLOG 2",
href:'../TheoryBlogPosts/Blog2.html'},

{ title: "BLOG 3",  
href:'../TheoryBlogPosts/Blog3.html'},


{ title:"READ MORE BLOGS", 
href:'../TheoryBlogPosts/Blog6.html'},

];

const dataj = [

    { title:"Data 1",  
    
    href: "../Data/Data1.html"},
    
    { title:"Data 2",  
    
    href: "../Data/Data2.html"},

  { title:"Data 3",  
    
    href: "../Data/Data3.html"},
    

];

const exam = [

    { title:"Data-drivenArtwork",  
    
    href: "../Exam/Data5.html"},
    
    { title:"DataVisual&Blog",  
    
    href: "../Exam/Data4.html"},
    

];
    
const navlinks = [
    {title: 'HOME', link: '../index.html'},

    {title: 'ABOUT', link: '../About/AboutPage.html'},

    {title: 'BLOGS', link: '../TheoryBlogPosts/BlogPage.html'},

    {title: 'DATA', link: '../Data/DataPage.html'},

    {title: 'DESIGN', link: '../TheoryBlogPosts/wireframes.html'},

    {title: 'EXAM', link: '../Exam/exampage.html'},

    {title: 'CONTACT', link: '../ContactUs/ContactPage.html'},

];

const navBar = document.querySelector('nav');
 const ul = document.querySelector(".navlinks");
 
const InitialiseHeader = () => 
{
  
   const navLength = navlinks.length;
    for (var i = 0; i<navLength; i++)
    { 
   const newItem = document.createElement("li");
        const newLink = document.createElement("a");
  
        newLink.href = navlinks[i].link;
        newLink.text = navlinks[i].title;
        if (navlinks [i].title == "BLOGS")
        {  
            createBlogs();
            newItem.appendChild(blogList);
        }
        else if (navlinks [i].title == "DATA")
        { 
            createData();
            newItem.appendChild(datalist);
        }
    
    if (navlinks [i].title == "EXAM")
    { 
        createExam();
        newItem.appendChild(examlist);
    }
    newItem.appendChild(newLink);
        ul.appendChild(newItem);
    }
    navBar.appendChild(ul);
    
};
 
        const blogList = document.createElement('ul');
        function createBlogs()
        { 
            
            const bloglength = blogs.length;
            for (i =0; i< bloglength; i++)
            {
                const newBlogitem = document.createElement('li');
                const blogLink = document.createElement('a');
                blogLink.href = blogs[i].href;
                blogLink.innerHTML = blogs[i].title;
                newBlogitem.appendChild(blogLink);
                blogList.appendChild(newBlogitem);
            }
        }

        const datalist = document.createElement('ul');
        function createData()
        { 
            const datalength = dataj.length
            for (i =0; i< datalength; i++)
            { 
                const newDataitem = document.createElement('li');
                const dataLink = document.createElement('a');
                dataLink.href = dataj[i].href;
                dataLink.innerHTML = dataj[i].title;
                newDataitem.appendChild(dataLink);
                datalist.appendChild(newDataitem);
            }
        }

        const examlist = document.createElement('ul');
        function createExam()
        { 
            const examlength = exam.length
            for (i =0; i< examlength; i++)
            { 
                const newExamitem = document.createElement('li');
                const examLink = document.createElement('a');
                examLink.href = exam[i].href;
                examLink.innerHTML = exam[i].title;
                newExamitem.appendChild(examLink);
                examlist.appendChild(newExamitem);
            }
        }

        
window.addEventListener('DOMContentLoaded', (event) => InitialiseHeader()) //only do this page once the page is loaded