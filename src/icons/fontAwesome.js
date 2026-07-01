import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faDownload,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Add icons to the library so they can be referenced by name
library.add(faEnvelope, faDownload, faPaperPlane, faGithub);

export default library;
