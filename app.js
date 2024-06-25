$(".nav-li").mouseenter(function(){
	$("<audio></audio>").attr({ 
		'src':'assets/'+'lightsaber.mp3', 
		'volume':0.4,
		'autoplay':'autoplay'
	}).appendTo("body");
});


const fadeOut = () => {
    const loaderWrapper = document.querySelector('loader')
    loaderWrapper.classList.add('fade');
}
// window.addEventListener('load', fadeOut);

  $(window).on('load', function (fadeOut) {
    $('.loader').hide();
  }) 

//intersection animation

const articles = document.querySelectorAll(".article")
const revs = document.querySelectorAll(".rev")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

//to stop the animation to repeat from downwards
        if(entry.isIntersecting)    observer.unobserve(entry.target)
    })
}, {
    threshold: 0.05,
})

articles.forEach(article => {
    observer.observe(article)
})

const observerRev = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)

//to stop the animation to repeat from downwards
        if(entry.isIntersecting)    observerRev.unobserve(entry.target)
    })
}, {
    threshold: 0.05,
})

revs.forEach(rev => {
    observerRev.observe(rev)
})