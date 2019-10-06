import Project from '../model/Project';
import User from '../model/User';
import UsersProject from '../model/UsersProject';
import * as Yup from 'yup';

class ProjectController {
  async index(req, res) {
    const projects = await Project.findAll({
      where: {
        owner: req.userId,
      },
    });

    res.json(projects);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Error' });
    }

    const projectExists = await Project.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (projectExists) {
      return res.status(400).json({ error: 'This project name is unavaible' });
    }

    const project = await Project.create({
      name: req.body.name,
      owner: req.userId,
    });

    return res.json(project);
  }

  async show(req, res) {
    const project = await Project.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['id', 'name'],
        },
      ],
      attributes: ['id', 'name'],
    });

    if (!project) {
      return res.status(404).json({ error: 'Project does not exists' });
    }

    const userProject = await UsersProject.findAll({
      where: {
        project_id: req.params.id,
      },
      attributes: [],
      include: [
        {
          model: User,
          attributes: ['id', 'name'],
        },
      ],
    });

    project.Users = userProject;
    return res.json({
      Project: { ...project.dataValues },
      Users: [...userProject],
    });
  }
}

export default new ProjectController();
