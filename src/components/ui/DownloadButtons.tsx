import { getActiveSiteVersion } from '../../data/siteVersions';

function DownloadButtons() {
  const { resumePdf, resumeDocx } = getActiveSiteVersion();

  return (
    <div className="flex flex-col gap-3 lg:min-w-[250px]">
      <a
        href={resumePdf}
        download="Manoj_Mehta_Resume.pdf"
        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Download PDF Resume
      </a>

      {resumeDocx ? (
        <a
          href={resumeDocx}
          download="Manoj_Mehta_Resume.docx"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          Download DOCX Resume
        </a>
      ) : null}
    </div>
  );
}

export default DownloadButtons;
