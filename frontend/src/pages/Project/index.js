import React, { useState, useEffect } from 'react';

import { Main, MainHeader, Container, MainBody, MainFooter } from './styles';
import Table from '~/components/Table';
import api from '~/services/api';
import { store } from 'store';

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const project = await api.get('/projects', {
        headers: { Authorization: 'Bearer ' + store.getState().auth.token },
      });

      setProjects(project.data);
    }
    loadProjects();
  }, []);

  return (
    <Container>
      <Main>
        <MainHeader>Projetos</MainHeader>
        <MainBody>
          <Table data={projects}>
            <thead>
              <tr>
                <th>Nome do Projeto</th>
                <th></th>
              </tr>
            </thead>
          </Table>
        </MainBody>
        <MainFooter></MainFooter>
      </Main>
    </Container>
  );
}
