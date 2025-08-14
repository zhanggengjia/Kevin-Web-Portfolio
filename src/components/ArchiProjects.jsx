import ArchiProjectsCard from "./ArchiProjectsCard"
import SectionTitle from "./SectionTitle"
import { useFetchProjects } from './fetchProjects'

const ArchiProjects = () => {
  const { loading, projects } = useFetchProjects('archiProjects');



  if (loading) {
    return (
      <section className='projects'>
        <h2>Loading Now...</h2>
      </section>
    );
  }

  return (
    <section className="py-20 theme-transition" id="archiProjects">
      <div className="align-element">
        <SectionTitle text='Architecture Projects' />
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            // console.log(project)
            return <ArchiProjectsCard key={project.id} {...project} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ArchiProjects