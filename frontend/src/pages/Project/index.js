import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { Main, MainHeader, Container, MainBody } from './styles';
import Table from '~/components/Table';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '~/components/Modal';
import api from '~/services/api';
import { store } from 'store';
export default function Project() {
  const [projects, setProjects] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function loadProjects() {
      const project = await api.get('/projects', {
        headers: { Authorization: 'Bearer ' + store.getState().auth.token },
      });

      setProjects(project.data);
    }
    loadProjects();
  }, []);

  function handleVisible() {
    setVisible(!visible);
  }
  return (
    <Container>
      {visible && (
        <Modal visible={visible} changeVisibility={handleVisible}>
          <ModalHeader>
            <span>Cabeçalho</span>
          </ModalHeader>
          <ModalBody>Corpo</ModalBody>
          <ModalFooter>teste</ModalFooter>
        </Modal>
      )}

      <Main>
        <MainHeader>
          Lista de Projetos
          <button type="button" onClick={handleVisible}>
            <MdAdd size={25} /> Novo
          </button>
        </MainHeader>
        <MainBody>
          <Table data={projects}>
            <thead>
              <tr></tr>
            </thead>
          </Table>
        </MainBody>
      </Main>
    </Container>
  );
}
