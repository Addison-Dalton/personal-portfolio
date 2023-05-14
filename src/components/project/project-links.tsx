import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';
import IconLink from 'components/icon-link';

export type ProjectLinkProps = {
  githubUrl?: string;
  projectUrl?: string;
  boxSize?: string;
};

// TODO - link color against background not great in light mode
const ProjectLinks: React.FC<ProjectLinkProps> = ({
  githubUrl,
  projectUrl,
  boxSize = '2em'
}) => {
  if (!githubUrl && !projectUrl) return null;

  return (
    <>
      {projectUrl && (
        <IconLink
          icon={ExternalLinkIcon}
          href={projectUrl}
          boxSize={boxSize}
          title="Go to project"
          isExternal
        />
      )}
      {githubUrl && (
        <IconLink
          icon={FaGithub}
          href={githubUrl}
          boxSize={boxSize}
          title="Go to GitHub"
          isExternal
        />
      )}
    </>
  );
};

export default ProjectLinks;
