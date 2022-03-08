function ResumeTitle({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-xl border-b pb-2 mb-4 border-neutral-500 border-opacity-50">
        {title}
      </h2>
    </>
  );
}

export default ResumeTitle;
