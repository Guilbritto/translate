import Project from '../model/Project';

class ProjectController {
  async store(req, res) {
    const project = await Project.create({
      ...req.body,
      owner: req.userId,
    });

    return res.json(project);
  }
}

export default new ProjectController();
