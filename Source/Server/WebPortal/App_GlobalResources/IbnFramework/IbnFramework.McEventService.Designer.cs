//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:2.0.50727.3053
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Resources.IbnFramework {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option or rebuild the Visual Studio project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.Web.Application.StronglyTypedResourceProxyBuilder", "9.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class McEventService {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal McEventService() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("Resources.IbnFramework.McEventService", global::System.Reflection.Assembly.Load("App_GlobalResources"));
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Is Active.
        /// </summary>
        internal static string IsActive {
            get {
                return ResourceManager.GetString("IsActive", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Object Created.
        /// </summary>
        internal static string ObjectCreated {
            get {
                return ResourceManager.GetString("ObjectCreated", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Object Created: {event:ObjectTitle}.
        /// </summary>
        internal static string ObjectCreatedTitle {
            get {
                return ResourceManager.GetString("ObjectCreatedTitle", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Object Deleted.
        /// </summary>
        internal static string ObjectDeleted {
            get {
                return ResourceManager.GetString("ObjectDeleted", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Object Deleted: {event:ObjectTitle}.
        /// </summary>
        internal static string ObjectDeletedTitle {
            get {
                return ResourceManager.GetString("ObjectDeletedTitle", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Object Updated.
        /// </summary>
        internal static string ObjectUpdated {
            get {
                return ResourceManager.GetString("ObjectUpdated", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Object Updated: {event:ObjectTitle}.
        /// </summary>
        internal static string ObjectUpdatedTitle {
            get {
                return ResourceManager.GetString("ObjectUpdatedTitle", resourceCulture);
            }
        }
    }
}