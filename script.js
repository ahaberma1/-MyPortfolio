const projects = {
  one: {title: 'EasyFolio / Visual Portfolio', description: 'As frontend contributor, testing lead, and project manager, I implemented dashboard cards, item management forms, search filters, category views, pagination, and a reusable delete-confirmation modal. I refined CSS Grid and Flexbox layouts, standardized buttons, and fixed clipped labels. I also coordinate Jira tasks, review requirements, and document issues with my Agile/Scrum team.', stack: 'Angular, TypeScript, HTML, CSS, Jira', period: 'August 10, 2026 — Present'},
  two: {title: 'Personal Portfolio Website', description: 'Built a multipage HTML/CSS website, validated four HTML pages and a shared stylesheet with W3C validators, and published updates through cPanel.', stack: 'HTML, CSS, W3C validators, cPanel', period: 'May 30, 2026 — July 30, 2026'},
  three: {title: 'Student Hub', description: 'Developed a Java/Spring Boot application with REST APIs and MySQL CRUD operations. Debugged functionality, managed Maven dependencies, and deployed using Google Cloud.', stack: 'Java, Spring Boot, REST APIs, MySQL, Maven, Google Cloud', period: 'May 2026 — July 2026'}
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-description').textContent = project.description;
    document.querySelector('#dialog-stack').textContent = project.stack;
    document.querySelector('#dialog-period').textContent = project.period;
    dialog.showModal();
  });
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
});
document.querySelector('#year').textContent = new Date().getFullYear();
