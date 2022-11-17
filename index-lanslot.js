/* MESSAGE AUX RECRUTEURS :)
    Ce code a été ecris il y a déja quelques années
    Je le laisse dans l'état afin de garder une trace de mes progrès
*/

gsap.registerPlugin(ScrollTrigger)
let tl = gsap.timeline({
    scrollTrigger: {
        scrub:true,
        trigger:".demo",
        markers:false,
        start:"top 200px",
        end: "bottom bottom",
        toggleActions: "play pause reverse none"
    }
})
tl.to(".manette", {
    y: "350",
    ease:'linear',
    duration: 10,
});
tl.to(".rocket", {
    y: "-420",
    ease:'linear',
    duration: 16,
}, "<");
tl.to(".manette2", {
    y: "530",
    ease:'linear',
    duration: 15,
}, "<");
tl.to(".coeur1", {
    y: "200",
    ease:'linear',
    duration: 10,
});
tl.to(".coeur2", 
{y: "330",
ease:'linear',
duration: 10}, 
"<");
tl.to(".coeur3", 
{y: "330",
ease:'linear',
duration: 10}, 
"<");
tl.to(".coeur4", 
{y: "330",
ease:'linear',
duration: 10}, 
"<");