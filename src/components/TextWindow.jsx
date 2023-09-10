import { useEffect,useSt } from "react";

export const TextWindow = (helpText) => {   
   const embedId = "yjGFhKbLMwk?si=uCmtpuSeOHUT_JF1"
  return (

    <div className="container">
      <div>

      </div>



      <p class="lh-1">his is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
      <p class="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
      <p class="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
      <p class="lh-lg">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
  
          <iframe
          id="youtubeIframe"
          src={`https://www.youtube.com/embed/${embedId}`}
          width={400}
          height={225}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        /> 
        </div>
  )
}
