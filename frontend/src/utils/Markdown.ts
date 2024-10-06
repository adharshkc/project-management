import { Project } from "../types/type";

const generateMarkDown = (project?:Project|null)=>{
    const completedTodos = project?.todos.filter(todo => todo.status == 'completed');

    const pendingTodos = project?.todos.filter(todo => todo.status == 'todo');

    const completedCount = completedTodos?.length;
    const totalCount = project?.todos.length;

    let markdown = `# ${project?.name}\n\n`;
    markdown += `**Summary:** ${completedCount} / ${totalCount} todos completed\n\n`;
    markdown += `**Summary:** ${pendingTodos?.length} / ${totalCount} todos pending\n\n`;

    markdown+= `\n## Pending Todos\n`
    pendingTodos?.forEach(todo => {
        markdown += `- [-] ${todo.name} (Created: ${todo.createdAt})\n`;
    });
    markdown += `\n## Completed Todos\n`;
    completedTodos?.forEach(todo => {
        markdown += `- [x] ${todo.name} (Created: ${todo.createdAt}, Completed: ${todo.updatedAt})\n`;
    });

    return markdown

}

export default generateMarkDown;