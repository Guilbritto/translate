import UsersProject from '../model/UsersProject';
import Project from '../model/Project';

class InviteController {
  async store(req, res) {
    const { user_id, project_id } = req.body;

    const project = await Project.findOne({
      where: { id: project_id, owner: req.userId },
    });

    if (!project) {
      return res
        .status(400)
        .json({ error: 'You can only invite to your own projects' });
    }

    const userProject = await UsersProject.findOne({
      where: {
        project_id,
        user_id,
      },
    });

    if (userProject) {
      return res.status(400).json({ error: 'This User is already in project' });
    }

    const users_project = await UsersProject.create({
      user_id,
      project_id,
    });

    return res.json(users_project);
  }
}

export default new InviteController();
