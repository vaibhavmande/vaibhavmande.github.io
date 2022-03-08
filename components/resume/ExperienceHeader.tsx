type ExperienceHeaderType = {
  position: string;
  duration: string;
  company: string;
  location: string;
};

function ExperienceHeader({
  position,
  duration,
  company,
  location
}: ExperienceHeaderType) {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl">{position}</p>
        <p className="text-gray-500">{duration}</p>
      </div>
      <div className="flex gap-2 items-center mb-4">
        <p className="text-lg">{company}</p>-
        <p className="italic spa">{location}</p>
      </div>
    </>
  );
}

export default ExperienceHeader;
