"use strict";
var _a;
function Skill(skill) {
    return `<div class="skill-container">
                 <div style="flex: 1;">${skill.name}</div>
                 <div class="progress-wrapper" style="margin-bottom: 0;flex: 4">
                      <div class="progress-line" style="background-color:${skill.color !== null ? skill.color : '#4ebdd4'};width:${skill.val}">              
                      </div>
                 </div>
             </div>`;
}
function SkillsBlock(skills) {
    return `<div class="skills_block">
       ${skills.map(Skill).join('')}
</div>`;
}
let skills = [
    {
        name: 'JS',
        val: '80%',
        color: '#e74438'
    },
    {
        name: 'TS',
        val: '50%',
        color: '#e74439'
    },
    {
        name: 'Node.js',
        val: '40%',
        color: '#e74440'
    },
    {
        name: 'Vue.js',
        val: '2%',
        color: 'rgba(16,255,182,0.78)'
    },
    {
        name: 'HTML/CSS',
        val: '30%',
        color: 'rgba(6,176,255,0.64)'
    }
];
(_a = document.querySelector('.skills-sections')) === null || _a === void 0 ? void 0 : _a.innerHTML = SkillsBlock(skills);
