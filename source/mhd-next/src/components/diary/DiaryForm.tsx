export default function DiaryForm({
  updateDiaryTitle,
  updateDiaryDescription,
}: {
  updateDiaryTitle: (title: string) => void;
  updateDiaryDescription: (description: string) => void;
}) {
  //Diary Title

  return (
    <div className="w-full">
      <form>
        <span>タイトル</span>
        <input
          className="w-full p-2 border-2"
          type="text"
          onChange={(e) => updateDiaryTitle(e.target.value)}
        />
        <span>内容</span>
        <textarea
          className="w-full h-[200px] p-2 border-2"
          id="message"
          name="message"
          onChange={ (e) => updateDiaryDescription(e.target.value)}
        />
      </form>
    </div>
  );
}
