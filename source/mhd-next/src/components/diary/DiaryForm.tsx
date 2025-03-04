/**
 * 
 * @param param0 
 * @returns 
 */
export default function DiaryForm({
  diaryTitle,
  updateDiaryTitle,
  diaryDescription,
  updateDiaryDescription,
}: {
  diaryTitle: string;
  updateDiaryTitle: (title: string) => void;
  diaryDescription: string;
  updateDiaryDescription: (description: string) => void;
}) {

  return (
    <div className="w-full">
      <form>
        <span>タイトル</span>
        <input
          className="w-full p-2 border-2"
          type="text"
          value={diaryTitle}
          onChange={(e) => updateDiaryTitle(e.target.value)}
        />
        <span>内容</span>
        <textarea
          className="w-full h-[200px] p-2 border-2"
          id="message"
          name="message"
          value={diaryDescription}
          onChange={ (e) => updateDiaryDescription(e.target.value)}
        />
      </form>
    </div>
  );
}
