﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Товар.
    /// </summary>
    // *** Start programmer edit section *** (Товар CustomAttributes)

    // *** End programmer edit section *** (Товар CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТоварE", new string[] {
            "Наименование as \'Наименование\'",
            "Изображение as \'Изображение\'",
            "Свойства as \'Свойства\'",
            "Поставщик as \'Поставщик\'",
            "Поставщик.Поставщик as \'Поставщик\'",
            "Производитель as \'Производитель\'",
            "Производитель.Производитель as \'Производитель\'"}, Hidden=new string[] {
            "Поставщик.Поставщик",
            "Производитель.Производитель"})]
    [MasterViewDefineAttribute("ТоварE", "Поставщик", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Поставщик")]
    [MasterViewDefineAttribute("ТоварE", "Производитель", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Производитель")]
    [View("ТоварL", new string[] {
            "Наименование as \'Наименование\'",
            "Изображение as \'Изображение\'",
            "Свойства as \'Свойства\'",
            "Поставщик.Поставщик as \'Поставщик\'",
            "Производитель.Производитель as \'Производитель\'"})]
    public class Товар : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private string fИзображение;
        
        private string fСвойства;
        
        private IIS.Kursovaya.Поставщик fПоставщик;
        
        private IIS.Kursovaya.Производитель fПроизводитель;
        
        // *** Start programmer edit section *** (Товар CustomMembers)

        // *** End programmer edit section *** (Товар CustomMembers)

        
        /// <summary>
        /// Изображение.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Изображение CustomAttributes)

        // *** End programmer edit section *** (Товар.Изображение CustomAttributes)
        [StrLen(255)]
        public virtual string Изображение
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Изображение Get start)

                // *** End programmer edit section *** (Товар.Изображение Get start)
                string result = this.fИзображение;
                // *** Start programmer edit section *** (Товар.Изображение Get end)

                // *** End programmer edit section *** (Товар.Изображение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Изображение Set start)

                // *** End programmer edit section *** (Товар.Изображение Set start)
                this.fИзображение = value;
                // *** Start programmer edit section *** (Товар.Изображение Set end)

                // *** End programmer edit section *** (Товар.Изображение Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Наименование CustomAttributes)

        // *** End programmer edit section *** (Товар.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Наименование Get start)

                // *** End programmer edit section *** (Товар.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Товар.Наименование Get end)

                // *** End programmer edit section *** (Товар.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Наименование Set start)

                // *** End programmer edit section *** (Товар.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Товар.Наименование Set end)

                // *** End programmer edit section *** (Товар.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Свойства.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Свойства CustomAttributes)

        // *** End programmer edit section *** (Товар.Свойства CustomAttributes)
        [StrLen(255)]
        public virtual string Свойства
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Свойства Get start)

                // *** End programmer edit section *** (Товар.Свойства Get start)
                string result = this.fСвойства;
                // *** Start programmer edit section *** (Товар.Свойства Get end)

                // *** End programmer edit section *** (Товар.Свойства Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Свойства Set start)

                // *** End programmer edit section *** (Товар.Свойства Set start)
                this.fСвойства = value;
                // *** Start programmer edit section *** (Товар.Свойства Set end)

                // *** End programmer edit section *** (Товар.Свойства Set end)
            }
        }
        
        /// <summary>
        /// Товар.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Поставщик CustomAttributes)

        // *** End programmer edit section *** (Товар.Поставщик CustomAttributes)
        [PropertyStorage(new string[] {
                "Поставщик"})]
        [NotNull()]
        public virtual IIS.Kursovaya.Поставщик Поставщик
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Поставщик Get start)

                // *** End programmer edit section *** (Товар.Поставщик Get start)
                IIS.Kursovaya.Поставщик result = this.fПоставщик;
                // *** Start programmer edit section *** (Товар.Поставщик Get end)

                // *** End programmer edit section *** (Товар.Поставщик Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Поставщик Set start)

                // *** End programmer edit section *** (Товар.Поставщик Set start)
                this.fПоставщик = value;
                // *** Start programmer edit section *** (Товар.Поставщик Set end)

                // *** End programmer edit section *** (Товар.Поставщик Set end)
            }
        }
        
        /// <summary>
        /// Товар.
        /// </summary>
        // *** Start programmer edit section *** (Товар.Производитель CustomAttributes)

        // *** End programmer edit section *** (Товар.Производитель CustomAttributes)
        [PropertyStorage(new string[] {
                "Производитель"})]
        [NotNull()]
        public virtual IIS.Kursovaya.Производитель Производитель
        {
            get
            {
                // *** Start programmer edit section *** (Товар.Производитель Get start)

                // *** End programmer edit section *** (Товар.Производитель Get start)
                IIS.Kursovaya.Производитель result = this.fПроизводитель;
                // *** Start programmer edit section *** (Товар.Производитель Get end)

                // *** End programmer edit section *** (Товар.Производитель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товар.Производитель Set start)

                // *** End programmer edit section *** (Товар.Производитель Set start)
                this.fПроизводитель = value;
                // *** Start programmer edit section *** (Товар.Производитель Set end)

                // *** End programmer edit section *** (Товар.Производитель Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТоварE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварE", typeof(IIS.Kursovaya.Товар));
                }
            }
            
            /// <summary>
            /// "ТоварL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварL", typeof(IIS.Kursovaya.Товар));
                }
            }
        }
    }
}
