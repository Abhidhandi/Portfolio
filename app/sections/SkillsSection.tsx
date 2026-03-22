const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "Python", "OpenAI API", "Git"
]

export default function SkillsSection() {
    return (

        <section id="skills" className="py-32 bg-black text-center">

            <h2 className="text-5xl text-white mb-16">
                Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">

                {skills.map(skill => (

                    <div
                        key={skill}
                        className="border border-red-800/30 py-4 rounded-lg text-red-400"
                    >
                        {skill}
                    </div>

                ))}

            </div>

        </section>

    )
}