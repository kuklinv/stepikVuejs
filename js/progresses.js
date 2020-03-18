var _a;
function Skill(skill) {
    return "<div class=\"skill-container\">\n                 <div style=\"flex: 1;\">" + skill.name + "</div>\n                 <div class=\"progress-wrapper\" style=\"margin-bottom: 0;flex: 4\">\n                      <div class=\"progress-line\" style=\"background-color:" + (skill.color !== null ? skill.color : '#4ebdd4') + ";width:" + skill.val + "\">              \n                      </div>\n                 </div>\n             </div>";
}
function SkillsBlock(skills) {
    return "<div class=\"skills_block\">\n       " + skills.map(Skill).join('') + "\n</div>";
}
var skills = [
    {
        name: 'JavaScript',
        val: '80%',
        color: '#e74438'
    },
    {
        name: 'Vue.js',
        val: '2%',
        color: 'rgba(16,255,182,0.78)'
    },
    {
        name: 'CSS',
        val: '30%',
        color: 'rgba(6,176,255,0.64)'
    }
];
// window.onload = function(){
// document.querySelector('skills-sections')?.innerHTML = SkillsBlock(skills);
// };
// let skillsSection = document.querySelector('skills-sections');
(_a = document.querySelector('.skills-sections')) === null || _a === void 0 ? void 0 : _a.innerHTML = SkillsBlock(skills);