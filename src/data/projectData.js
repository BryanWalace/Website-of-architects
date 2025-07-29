import projectImg1 from '../assets/images/project-1-main.png';
import projectImg2 from '../assets/images/project-2-main.png';
import projectImg3 from '../assets/images/project-3-main.png';
import projectDetailImg1 from '../assets/images/project-detail-1.png';
import projectDetailImg2 from '../assets/images/project-detail-2.png';
import blueprintDetailImg1 from '../assets/images/blueprint-detail-1.png';

export const projects = [
  {
    id: 'sample-project-1',
    title: 'Sample Project 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    mainImage: projectImg1,
    detailImage1: projectDetailImg1,
    detailImage2: projectDetailImg2,
    blueprintImage1: blueprintDetailImg1,
  },
  {
    id: 'sample-project-2',
    title: 'Sample Project 2',
    description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    mainImage: projectImg2,
    detailImage1: projectDetailImg1,
    detailImage2: projectDetailImg2,
  },
  {
    id: 'sample-project-3',
    title: 'Sample Project 3',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    mainImage: projectImg3,
    detailImage1: projectDetailImg1,
    detailImage2: projectDetailImg2,
  },
];