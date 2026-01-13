interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function SkillCard({ title, description, icon }: SkillCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-gray-700 border border-gray-600 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
